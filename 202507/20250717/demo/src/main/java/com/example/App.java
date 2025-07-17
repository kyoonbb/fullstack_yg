package com.example;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

// import com.example.webn.ControllerA;
// import com.example.webn.ControllerB;
import com.example.webs.Config;
import com.example.webs.ControllerA;
import com.example.webs.Test;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        String path = "/B/A";

        ApplicationContext app = 
        new AnnotationConfigApplicationContext(Config.class);

        app.getBean(Test.class).a.ActionAA();

        // System.out.println(
        //     app.getBean("A") == app.getBean("A")
        // );
        // System.out.println(
        //     app.getBean("B") == app.getBean("B")
        // );

        // System.out.println(app.getBean("A"));
        // System.out.println(app.getBean("B"));


        // ControllerA controller = 
        //     (ControllerA)app.getBean(ControllerA.class);
        // controller.ActionAA();

        // Map<String, Object> controllers = new HashMap<>();
        // controllers.put("A", new ControllerA());
        // controllers.put("B", new ControllerB());

        // if(path.startsWith("/A")) {
        //     ControllerA controller = (ControllerA)controllers.get("A");
        //     if(path.endsWith("/A")) {
        //         controller.ActionAA();
        //     }
        //     else {
        //         controller.ActionAB();
        //     }
        // } else {
        //     ControllerB controller = (ControllerB)controllers.get("B");
        //     if(path.endsWith("/A")) {
        //         controller.ActionBA();
        //     }
        //     else {
        //         controller.ActionBB();
        //     }
        // }
    }
}
