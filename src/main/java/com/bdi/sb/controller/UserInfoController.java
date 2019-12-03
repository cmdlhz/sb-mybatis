package com.bdi.sb.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdi.sb.dao.UserInfoMapper;
import com.bdi.sb.vo.UserInfoVO;

@RestController
public class UserInfoController {
	@Resource
	UserInfoMapper uim; // @Resource is the annotation that will help to extract beans from the container. (4.x버젼부터 사용 가능 @Autowired 대신에)
	
	@GetMapping("/users")
	public List<UserInfoVO> getUserInfos(){
		return uim.selectUserInfoList(null);
	}
}
