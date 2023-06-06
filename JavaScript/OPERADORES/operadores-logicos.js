/*
    OPERADORES LÓGICOS

    && -> E      // FILHO OBEDIENTE

    true && true = true
    true && false = false
    false && false = false

    || -> OU     // FILHO ESPERTINHO

    true || true = true
    true || false = true
    false || false = false

    ! -> NEGAÇÃO // FILHO DO CONTRA / REBELDE

    !true = false
    !false = true


*/

const random = true && (false || true ||false && true) || !false && (false || true && (true ||false && true))

console.log(random)