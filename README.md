# SOLID - 5 principios da programação que usa para deixar um código mais testável.

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

---

1. Cada classe/função tem uma responsabilidade única
   -Exemplo: tenho uma função que cria o feedback, a responsa dela é somente criar
   o feedback. Caso eu explique que uma função cria o feedback "E" envia email,
   ela já não tem responsabilidade unica;
2. As classes devem ser abertas para extensão mas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ...;
5. a classe não vai buscar as dependencias, as dependencias e entregam as coisas para a classe. a classe nem sabe direito o que ela esta fazendo com aquilo. e isso é bom para os testes, pois estes as vezes nao querem depender de terceiros ou de velocidade para fazer testes da aplicação.
