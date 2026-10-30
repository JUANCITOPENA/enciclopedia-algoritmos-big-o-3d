Proceso EVALUACION_OYM
    // Declarar o definir variables y tipos:
    Definir asistencia, practica, examen_parcial, examen_final, suma Como Entero;
    // Se agregan las dos nuevas variables de texto exigidas por el reto: seccion e institucion
    Definir calificacion, nombre_estudiante, Matricula, estado, seccion, institucion Como Caracter;
    
    // VALIDACIÓN: Nombre del Estudiante (No vacío)
    Repetir
        Escribir "Ingrese el nombre del Estudiante: ";
        Leer nombre_estudiante;
        Si Longitud(nombre_estudiante) = 0 Entonces
            Escribir "Error: El nombre no puede estar vacío.";
        FinSi
    Hasta Que Longitud(nombre_estudiante) > 0;
    
    // VALIDACIÓN: Matrícula (No vacía)
    Repetir
        Escribir "Ingrese la matricula: ";
        Leer Matricula;
        Si Longitud(Matricula) = 0 Entonces
            Escribir "Error: La matrícula no puede estar vacía.";
        FinSi
    Hasta Que Longitud(Matricula) > 0;
	
    // VALIDACIÓN RETO 1: Sección (Nueva variable - No vacía)
    Repetir
        Escribir "Ingrese la sección del estudiante: ";
        Leer seccion;
        Si Longitud(seccion) = 0 Entonces
            Escribir "Error: La sección no puede estar vacía.";
        FinSi
    Hasta Que Longitud(seccion) > 0;
	
    // VALIDACIÓN RETO 2: Institución (Nueva variable - No vacía)
    Repetir
        Escribir "Ingrese el nombre de la Institución: ";
        Leer institucion;
        Si Longitud(institucion) = 0 Entonces
            Escribir "Error: El nombre de la institución no puede estar vacío.";
        FinSi
    Hasta Que Longitud(institucion) > 0;
    
    // VALIDACIÓN: Nota de Asistencia (0 a 10)
    Repetir
        Escribir "Ingrese la Nota de Asistencia (0-10): ";
        Leer asistencia;
        Si asistencia < 0 O asistencia > 10 Entonces
            Escribir "Error: La nota debe estar entre 0 y 10. Intente de nuevo.";
        FinSi
    Hasta Que asistencia >= 0 Y asistencia <= 10;
    
    // VALIDACIÓN: Nota de Práctica (0 a 20)
    Repetir
        Escribir "Ingrese la Nota de Practica (0-20): ";
        Leer practica;
        Si practica < 0 O practica > 20 Entonces
            Escribir "Error: La nota debe estar entre 0 y 20. Intente de nuevo.";
        FinSi
    Hasta Que practica >= 0 Y practica <= 20;
    
    // VALIDACIÓN: Nota de Examen Parcial (0 a 20)
    Repetir
        Escribir "Ingrese la Nota de Examen Parcial (0-20): ";
        Leer examen_parcial;
        Si examen_parcial < 0 O examen_parcial > 20 Entonces
            Escribir "Error: La nota debe estar entre 0 y 20. Intente de nuevo.";
        FinSi
    Hasta Que examen_parcial >= 0 Y examen_parcial <= 20;
    
    // VALIDACIÓN: Nota de Examen Final (0 a 50)
    Repetir
        Escribir "Ingrese la Nota de Examen Final (0-50): ";
        Leer examen_final;
        Si examen_final < 0 O examen_final > 50 Entonces
            Escribir "Error: La nota debe estar entre 0 y 50. Intente de nuevo.";
        FinSi
    Hasta Que examen_final >= 0 Y examen_final <= 50;
    
    // Aplicar el proceso de sumar las notas ingresadas
    suma <- asistencia + practica + examen_parcial + examen_final;
    
    // Asignar la calificación literal (A, B, C, D, F)
    Si suma >= 90 Entonces
        calificacion <- "A";
    SiNo
        Si suma >= 80 Entonces
            calificacion <- "B";
        SiNo
            Si suma >= 75 Entonces
                calificacion <- "C";
            SiNo
                Si suma >= 70 Entonces
                    calificacion <- "D";
                SiNo
                    calificacion <- "F";
                FinSi
            FinSi
        FinSi
    FinSi
    
    // Asignar el estado del estudiante de forma independiente
    Si suma >= 70 Entonces
        estado <- "Aprobado";
    SiNo
        estado <- "Reprobado";
    FinSi
    
    // IMPRIMIR EL REPORTE DE NOTAS FINAL:
    Escribir "";
    Escribir "=== REPORTE DE EVALUACIÓN ===";
    Escribir "Institución          : ", institucion;
    Escribir "Nombre del Estudiante: ", nombre_estudiante;
    Escribir "Matrícula            : ", Matricula;
    Escribir "Sección              : ", seccion;
    Escribir "------------------------------------";
    Escribir "Nota de Asistencia   : ", asistencia, " / 10";
    Escribir "Nota de Práctica     : ", practica, " / 20";
    Escribir "Nota Examen Parcial  : ", examen_parcial, " / 20";
    Escribir "Nota Examen Final    : ", examen_final, " / 50";
    Escribir "------------------------------------";
    Escribir "Nota Final           : ", suma, " / 100";
    Escribir "Calificación         : ", calificacion;
    Escribir "Estado del Estudiante: ", estado;
FinProceso
