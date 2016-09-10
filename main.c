#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define V 10
#define MENOR 1
#define MAYOR 0

void mostrarVector(int[], int);
void cargarVector(int[], int);
void ordenarVector(int[], int, int);

int main()
{
    char cadena[21]="hola", cadena2[]="hola";
    int cantidad;

 // printf("Ingrese una palabra: ");
//    fflush(stdin);
    //scanf("%s", cadena);
   // gets(cadena);

    //strcpy(cadena, cadena2);
    cantidad = strlen(cadena);


    if(stricmp(cadena,cadena2)==0)
    {
        printf("Las cadenas son iguales...");
    }

    //strupr(cadena);
    strupr(cadena);

    strcat(cadena, " chau");



    puts(cadena);
   // printf("Ud. ingreso: %s", cadena);
    //printf("Numero de caracteres ingresados: %d\n", cantidad);





//
//   int vector[V];
//   int i, j, aux;
//
//    cargarVector(vector, V);
//    mostrarVector(vector, V);
//
//     system("pause");
//
//    system("cls");
//   ordenarVector(vector, V, MENOR);
//    printf("DE MENOR A MAYOR\n");
//    mostrarVector(vector, V);
//     system("pause");
//
//    system("cls");
//    ordenarVector(vector, V, MAYOR);
//     printf("DE MAYOR A MENOR\n");
//       mostrarVector(vector, V);


   return 0;
}

/** \brief permite la carga secuencial de un vector de enteros
 *
 * \param vector de enteros
 * \param cantidad de elementos del vector
 *
 */

void cargarVector(int vec[], int cant)
{
   int i;
   for(i=0; i<cant; i++)
   {
       printf("Ingrese un valor: ");
       scanf("%d", &vec[i]);
   }
}
void mostrarVector(int vec[], int cant)
{
   int i;
   for(i=0; i<cant; i++)
   {
       printf("%d\n", vec[i]);
   }
}

void ordenarVector(int vec[], int cant , int criterio)
{
   int i, j, aux;
   if(criterio == 1)
   {
       for(i=0; i<cant-1; i++)
       {
           for(j=i+1; j<cant; j++)
           {
               if(vec[i]>vec[j])//criterio de ordenamiento
               {
                   aux = vec[i];
                   vec[i] = vec[j];
                   vec[j] = aux;
               }
           }
        }
    }
    else
    {
    for(i=0; i<cant-1; i++)
   {
       for(j=i+1; j<cant; j++)
       {
           if(vec[i]<vec[j])//criterio de ordenamiento
           {
               aux = vec[i];
               vec[i] = vec[j];
               vec[j] = aux;
           }
       }
   }
    }

}
