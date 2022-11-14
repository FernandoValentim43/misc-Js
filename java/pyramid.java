import java.util.*;

public class pyramid {

  public static void main(String[] args) {
    Scanner teclado = new Scanner(System.in);
    System.out.print("Please, enter height of the pyramid: ");
    int height = teclado.nextInt();

    String pyramid = "*";

    for (int i = 0; i < height; i++) {

      System.out.println(pyramid);
      pyramid = pyramid.concat("*");
    }

  }
}