package com.example.demo.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Random;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Numbers {
    private int num1;
    private int num2;

    public static Numbers getRandomNumbers(){
        Numbers numbers = new Numbers();
        Random rand1 = new Random();
        numbers.num1 = rand1.nextInt(1000);
        Random rand2 = new Random();
        numbers.num2 = rand2.nextInt(1000);
        return numbers;
    }
}
