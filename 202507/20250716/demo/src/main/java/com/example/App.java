package com.example;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        User a = new User("Hello", "1234");
        // a.getName();
        // a.setName("HElo");
        // a.setPwd("1234");
        User b = new User();
        // a.getName();
        b.setName("HElo");
        b.setPwd("1234");
        System.out.println(a.toString());
        System.out.println(a.equals(b));
        // System.out.println( "Hello World!" );
    }
}
