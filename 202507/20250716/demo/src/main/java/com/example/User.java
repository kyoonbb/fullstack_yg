package com.example;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// @Getter
// @Setter
// @ToString(exclude = {
//   "pwd"
// })
// @EqualsAndHashCode
// @AllArgsConstructor
// @NoArgsConstructor
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
  private String name;
  private String pwd;
}
