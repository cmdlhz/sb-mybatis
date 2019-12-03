package com.bdi.sb;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.bdi.sb.dao") // service가 없이도 데이터가 니음
public class SbMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SbMybatisApplication.class, args);
	}

}
