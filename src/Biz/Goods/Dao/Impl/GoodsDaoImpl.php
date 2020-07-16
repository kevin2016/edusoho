<?php

namespace Biz\Goods\Dao\Impl;

use Biz\Goods\Dao\GoodsDao;
use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;

class GoodsDaoImpl extends AdvancedDaoImpl implements GoodsDao
{
    protected $table = 'goods';

    public function declares()
    {
        return [
            'timestamps' => ['createdTime', 'updatedTime'],
            'serializes' => [
                'images' => 'json',
            ],
            'conditions' => [
                'id = :id',
                'id IN (:ids)',
                'productId = :productId',
                'title = :title',
                'title LIKE :titleLike',
                'status = :status',
                'type = :type',
                'id <> :excludeId',
            ],
            'orderbys' => ['id', 'hotSeq', 'publishedTime'],
        ];
    }

    public function getByProductId($productId)
    {
        return $this->getByFields(['productId' => $productId]);
    }

    public function findByIds($ids)
    {
        return $this->findInField('id', $ids);
    }

    public function findByProductIds(array $productIds)
    {
        return $this->findInField('productId', $productIds);
    }

    public function refreshHotSeq()
    {
        $sql = "UPDATE {$this->table} set hotSeq = 0;";

        return $this->db()->exec($sql);
    }
}
