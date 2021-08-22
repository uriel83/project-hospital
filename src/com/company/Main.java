import java.util.concurrent.ThreadLocalRandom;
class Scratch {
    public static void main(String[] args) {

        int hour = ThreadLocalRandom.current().nextInt(0, 23);
        System.out.format("The hour is %d:00\n", hour );
        if (hour <= 19 && hour >17 ) {
            System.out.println("good evening");
        }
        else  if  (hour <= 16 && hour >=12 ) {
            System.out.println("good afternoon");
        }
        else if (hour < 12 && hour >=6 ) {
            System.out.println("good morning");
        }
        else {

            System.out.println("Good night");
        }



    }
}