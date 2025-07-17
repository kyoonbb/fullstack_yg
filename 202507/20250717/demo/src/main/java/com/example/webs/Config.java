package com.example.webs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
@ComponentScan(basePackages = {
  "com.example.webs"
})
public class Config {
  

  @Bean(name = "A")
  @Scope("singleton")
  public String A() {
    return new String("Hello");
  }
  @Bean(name = "B")
  @Scope("prototype")
  public String B() {
    return new String("World");
  }
}
