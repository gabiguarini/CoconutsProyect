using System;

namespace C_
{
    class Program
    {
        static void Main(string[] args)
        {
            var resultado = 0;
            Console.WriteLine("\n ingrese el numero a factorizar");
            string v = Console.ReadLine();
            int vint = Int32.Parse(v);
            int asdf = vint;
            for (int i = vint; i > 1; i--)
            {
                resultado = vint * (vint - i);
                asdf = asdf - 1;
                Console.WriteLine("Valores = {0}", asdf);
            }
            Console.WriteLine("\n Resultado= {0}", resultado);
            Console.WriteLine("\n Ingrese una tecla para finalizaar");
            Console.ReadLine();
        }
    }
}
