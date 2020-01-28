using System;

namespace Ruleta
{
    class Ruleta
    {
        static void Main(string[] args)
        {
            int valorIngresado = 1, valorValido = 0, i = 0;
            int[] arrayB = new int[36];
            Random rnd = new Random();
            int dado = rnd.Next(0, 36);
            while(valorIngresado > -1 & valorIngresado < 36)
            {
                Console.WriteLine("\n ~Ingrese los numeros tantos numeros como desee entre 0 y 36, cualquier otro valor pone a girar la ruleta~ ");
                var sValorIngresado = Console.ReadLine();
                try
                {
                    valorIngresado = Int32.Parse(sValorIngresado);
                    valorValido++;

                }
                catch (FormatException)
                {
                    Console.WriteLine("\n Valor ingresado No Valido");
                }
                try 
                {
                    if (valorValido == 1 & arrayB[valorIngresado] == 0)
                    {
                        arrayB[valorIngresado] = 1;
                        valorValido--;
                    }
                    else if (valorValido == 1 & arrayB[valorIngresado] == 1)
                    {
                        Console.WriteLine($"\n {valorIngresado} en uso");
                        // Funcionalidad extra, para quedar bien con el cliente
                        Console.WriteLine($"\n Desea ver la lista de valores en uso? y/n");
                        var listaValores = Console.ReadLine();                        
                        if (listaValores == "y")
                        {
                            while (i < (arrayB.Length))
                            {
                                if (arrayB[i] != 0)
                                {
                                    Console.WriteLine($"\n {i} en uso");
                                }
                                i++;
                            }
                        }
                        valorValido--;
                        // :D
                    }
                }
                catch(Exception)
                {
                    Console.WriteLine("\n ***Comenzando Ruleta*** ");
                }
                
            }
            int ganador = 0, perdedores = 0;
            i = 0;
            while (i < (arrayB.Length))
            {
                if (arrayB[i] == 1 & i == dado)
                {
                    Console.WriteLine($"\n EL NUMERO {i} ES EL GANADOR !!");
                    ganador++;
                }
                else if (arrayB[i] == 1)
                {
                    perdedores++;
                }
                i++;
            }
            Console.WriteLine($"\n ~ Hubieron {perdedores} perdedores en total ~ ");
        }
    }
}
