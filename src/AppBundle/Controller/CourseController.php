<?php

namespace AppBundle\Controller;


use Biz\Course\Service\ReviewService;
use Biz\Task\Service\TaskResultService;
use Biz\Task\Service\TaskService;
use Biz\User\Service\TokenService;
use Symfony\Component\HttpFoundation\Request;
use Topxia\Common\ArrayToolkit;
use Topxia\Common\Paginator;
use Topxia\Service\Common\ServiceKernel;
use AppBundle\Controller\Course\CourseShowMetas;

class CourseController extends CourseBaseController
{
    public function summaryAction($course)
    {
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        return $this->render('course/summary.html.twig', array(
            'courseSet'   => $courseSet,
            'course'      => $course,
        ));
    }

    public function showAction(Request $request, $id, $tab = 'summary')
    {
        $metas = CourseShowMetas::getGuestCourseShowMetas();
        $currentTab = $metas['tabs'][$tab];
        return $this->render('course/course-show.html.twig', array(
            'metas'        => $metas,
            'currentTab'   => $currentTab
        ));
    }

    public function headerAction(Request $request, $id)
    {   
        $course = $this->getCourseService()->getCourse($id);
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $courses = $this->getCourseService()->findPublishedCoursesByCourseSetId($course['courseSetId']);

        $user      = $this->getCurrentUser();
        $member    = $user->isLogin() ? $this->getMemberService()->getCourseMember($course['id'], $user['id']) : array();
        $isUserFavorite = $user->isLogin() ? $this->getCourseSetService()->isUserFavorite($user['id'], $course['courseSetId']) : false;

        return $this->render('course/part/header-for-guest.html.twig', array(
            'isUserFavorite'    => $isUserFavorite,
            'member'            => $member,
            'courseSet'         => $courseSet,
            'courses'           => $courses,
            'course'            => $course,
        ));
    }

    public function notesAction($course)
    {
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $notes = $this->getCourseNoteService()->findPublicNotesByCourseId($course['id']);

        $users = $this->getUserService()->findUsersByIds(ArrayToolkit::column($notes, 'userId'));
        $users = ArrayToolkit::index($users, 'id');

        $tasks = $this->getTaskService()->findTasksByIds(ArrayToolkit::column($notes, 'taskId'));
        $tasks = ArrayToolkit::index($tasks, 'id');

        $currentUser = $this->getCurrentUser();
        $likes       = $this->getCourseNoteService()->findNoteLikesByUserId($currentUser['id']);
        $likeNoteIds = ArrayToolkit::column($likes, 'noteId');
        return $this->render('course/note/notes.html.twig', array(
            'course'      => $course,
            'courseSet'   => $courseSet,
            'notes'       => $notes,
            'users'       => $users,
            'tasks'       => $tasks,
            'likeNoteIds' => $likeNoteIds
        ));
    }

    public function reviewListAction(Request $request, $course)
    {
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $conditions = array(
            'courseId' => $course['id'],
            'parentId' => 0
        );

        $paginator = new Paginator(
            $this->get('request'),
            $this->getReviewService()->searchReviewsCount($conditions),
            20
        );

        $reviews = $this->getReviewService()->searchReviews(
            $conditions,
            array('createdTime' => 'DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $user       = $this->getCurrentUser();
        $userReview = $this->getReviewService()->getUserCourseReview($user['id'], $course['id']);

        $users = $this->getUserService()->findUsersByIds(ArrayToolkit::column($reviews, 'userId'));

        return $this->render('course/review/list.html.twig', array(
            'courseSet'  => $courseSet,
            'course'     => $course,
            'reviews'    => $reviews,
            'userReview' => $userReview,
            'users'      => $users,
        ));
    }

    public function coursesBlockAction($courses, $view = 'list', $mode = 'default')
    {
        $userIds = array();

        foreach ($courses as $key => $course) {
            //TODO
            // $userIds = array_merge($userIds, $course['teacherIds']);

            $classroomIds = $this->getClassroomService()->findClassroomIdsByCourseId($course['id']);

            $courses[$key]['classroomCount'] = count($classroomIds);
            $courses[$key]['courseSet']      = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
            if (count($classroomIds) > 0) {
                $classroom                  = $this->getClassroomService()->getClassroom($classroomIds[0]);
                $courses[$key]['classroom'] = $classroom;
            }
        }

        $users = $this->getUserService()->findUsersByIds($userIds);

        return $this->render("course/courses-block-{$view}.html.twig", array(
            'courses' => $courses,
            'users'   => $users,
            //'classroomIds' => $classroomIds,
            'mode'    => $mode
        ));
    }

    public function taskListAction($course)
    {
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $courseItems = $this->getCourseService()->findCourseItems($course['id']);

        return $this->render('course/task-list/task-list.html.twig', array(
            'course'      => $course,
            'courseSet'   => $courseSet,
            'courseItems' => $courseItems
        ));
    }

    public function characteristicPartAction(Request $request, $id)
    {
        $course = $this->getCourseService()->getCourse($id);

        $tasks = $this->getTaskService()->findTasksFetchActivityByCourseId($course['id']);

        $characteristicData = array();
        $activities         = $this->get('extension.default')->getActivities();
        foreach ($tasks as $task) {
            $type = strtolower($task['activity']['mediaType']);

            if (isset($characteristicData[$type])) {
                $characteristicData[$type]['num']++;
            } else {
                $characteristicData[$type] = array(
                    'icon' => $activities[$type]['meta']['icon'],
                    'name' => $activities[$type]['meta']['name'],
                    'num'  => 1
                );
            }
        }

        return $this->render('course/part/characteristic.html.twig', array(
            'course'             => $course,
            'characteristicData' => $characteristicData
        ));
    }

    public function otherCoursePartAction(Request $request, $id)
    {
        list($courseSet, $course) = $this->tryGetCourseSetAndCourse($id);

        $otherCourse = $course; // $this->getCourseService()->getOtherCourses($course['id']);

        return $this->render('course/part/other-course.html.twig', array(
            'otherCourse' => $otherCourse,
            'courseSet'   => $courseSet
        ));
    }

    public function teachersPartAction(Request $request, $id)
    {
        list(, $course) = $this->tryGetCourseSetAndCourse($id);

        $teachers = $this->getUserService()->findUsersByIds($course['teacherIds']);

        return $this->render('course/part/teachers.html.twig', array(
            'teachers' => $teachers
        ));
    }

    public function newestStudentsPartAction(Request $request, $id)
    {
        list(, $course) = $this->tryGetCourseSetAndCourse($id);

        $conditions = array(
            'courseId' => $course['id'],
            'role'     => 'student',
            'locked'   => 0
        );

        $members    = $this->getMemberService()->searchMembers($conditions, array('createdTime' => 'DESC'), 0, 20);
        $studentIds = ArrayToolkit::column($members, 'userId');
        $students   = $this->getUserService()->findUsersByIds($studentIds);

        return $this->render('course/part/newest-students.html.twig', array(
            'students' => $students
        ));
    }

    public function orderInfoAction(Request $request, $sn)
    {
        $order = $this->getOrderService()->getOrderBySn($sn);

        if (empty($order)) {
            throw $this->createNotFoundException($this->getServiceKernel()->trans('订单不存在!'));
        }

        $course = $this->getCourseService()->getCourse($order['targetId']);

        if (empty($course)) {
            throw $this->createNotFoundException($this->getServiceKernel()->trans('课程不存在，或已删除。'));
        }

        return $this->render('course/course-order.html.twig', array('order' => $order, 'course' => $course));
    }

    public function qrcodeAction(Request $request, $id)
    {
        $user  = $this->getCurrentUser();
        $host  = $request->getSchemeAndHttpHost();
        $token = $this->getTokenService()->makeToken('qrcode', array(
            'userId'   => $user['id'],
            'data'     => array(
                'url'    => $this->generateUrl('course_show', array('id' => $id), true),
                'appUrl' => "{$host}/mapi_v2/mobile/main#/course/{$id}"
            ),
            'times'    => 1,
            'duration' => 3600
        ));
        $url   = $this->generateUrl('common_parse_qrcode', array('token' => $token['token']), true);

        $response = array(
            'img' => $this->generateUrl('common_qrcode', array('text' => $url), true)
        );
        return $this->createJsonResponse($response);
    }

    public function exitAction(Request $request, $id)
    {
        list($course, $member) = $this->getCourseService()->tryTakeCourse($id);
        $user = $this->getCurrentUser();
        if (empty($member)) {
            throw $this->createAccessDeniedException($this->getServiceKernel()->trans('您不是课程的学员。'));
        }

        if ($member["joinedType"] == "course" && !empty($member['orderId'])) {
            throw $this->createAccessDeniedException($this->getServiceKernel()->trans('有关联的订单，不能直接退出学习。'));
        }

        $this->getCourseMemberService()->removeStudent($course['id'], $user['id']);

        return $this->createJsonResponse(true);
    }

    // TODO old
    protected function getClassroomService()
    {
        return $this->createService('Classroom:ClassroomService');
    }

    /**
     * @return CourseNoteService
     */
    protected function getCourseNoteService()
    {
        return $this->createService('Note:CourseNoteService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->createService('Task:TaskService');
    }

    /**
     * @return TaskResultService
     */
    protected function getTaskResultService()
    {
        return $this->createService('Task:TaskResultService');
    }

    /**
     * @return ReviewService
     */
    protected function getReviewService()
    {
        return $this->createService('Course:ReviewService');
    }

    protected function getOrderService()
    {
        return $this->createService('Order:OrderService');
    }

    protected function getServiceKernel()
    {
        return ServiceKernel::instance();
    }

    /**
     * @return TokenService
     */
    protected function getTokenService()
    {
        return $this->createService('User:TokenService');
    }
}
