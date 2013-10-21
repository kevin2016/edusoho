<?php

namespace Topxia\Common;

/**
 * 一个简单的验证类
 */
class SimpleValidator
{
	public static function email($value)
	{
        $value = (string) $value;
        $valid = filter_var($value, FILTER_VALIDATE_EMAIL);
        return $valid !== false ;
	}

	public static function nickname($value, array $option = array())
	{
		$option = array_merge(
			array('minLength' => 4, 'maxLength' => 20),
			$option
		);

		$len = (strlen($value) + mb_strlen($value, 'utf-8')) / 2;
		if ($len > $option['maxLength'] or $len < $option['minLength']) {
			return false;
		}

		return !!preg_match('/^[\x{4e00}-\x{9fa5}a-zA-z0-9_]+$/u', $value);
	}

	public static function password($value, array $option = array())
	{
		return !!preg_match('/^[\S]{5,20}$/u', $value);
	}

	public static function truename($value)
	{
		return !!preg_match('/^[\x{4e00}-\x{9fa5}]{2,5}$/u', $value);
	}

	public static function idcard($value)
	{
		return !!preg_match('/^\d{17}[0-9xX]$/', $value);
	}

	public static function bankCardId($value)
	{
		return !!preg_match('/^(\d{16}|\d{19})$/', $value);
	}

	public static function mobile($value)
	{
		return !!preg_match('/^1\d{10}$/', $value);
	}

	public static function phone($value)
	{
		return !!preg_match('/^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/', $value);
	}

	public static function date($value)
	{
		return !!preg_match('/^(\d{4}|\d{2})-((0?([1-9]))|(1[0-2]))-((0?[1-9])|([12]([0-9]))|(3[0|1]))$/', $value);
	}

	public static function qq($value)
	{
		return !!preg_match('/^[1-9]\d{4,}$/', $value);
	}
}