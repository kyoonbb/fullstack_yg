package com.example.webs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Test {
  @Autowired
  public ControllerA a;

  @Autowired
  @Qualifier("A")
  public String test;
}
