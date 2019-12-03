package com.bdi.sb.dao;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;

import com.bdi.sb.vo.UserInfoVO;

@MapperScan
public interface UserInfoMapper {
	public List<UserInfoVO> selectUserInfoList(UserInfoVO ui);
}
