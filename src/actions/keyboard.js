import * as reducerType from '../unit/reducerType'; // Importa las constantes de tipos de acción

/**
 * @function drop
 * Crea una acción al pulsar la tecla de Caída Instantánea (Hard Drop).
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function drop(data) {
  return {
    type: reducerType.KEY_DROP, // Tipo de acción: TECLA_CAÍDA_INSTANTÁNEA
    data,
  };
}

/**
 * @function down
 * Crea una acción al pulsar la tecla de movimiento Abajo.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function down(data) {
  return {
    type: reducerType.KEY_DOWN, // Tipo de acción: TECLA_ABAJO
    data,
  };
}

/**
 * @function left
 * Crea una acción al pulsar la tecla de movimiento Izquierda.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function left(data) {
  return {
    type: reducerType.KEY_LEFT, // Tipo de acción: TECLA_IZQUIERDA
    data,
  };
}

/**
 * @function right
 * Crea una acción al pulsar la tecla de movimiento Derecha.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function right(data) {
  return {
    type: reducerType.KEY_RIGHT, // Tipo de acción: TECLA_DERECHA
    data,
  };
}

/**
 * @function rotate
 * Crea una acción al pulsar la tecla de Rotación.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function rotate(data) {
  return {
    type: reducerType.KEY_ROTATE, // Tipo de acción: TECLA_ROTAR
    data,
  };
}

/**
 * @function reset
 * Crea una acción al pulsar la tecla de Reinicio (Reset).
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function reset(data) {
  return {
    type: reducerType.KEY_RESET, // Tipo de acción: TECLA_REINICIO
    data,
  };
}

/**
 * @function music
 * Crea una acción al pulsar la tecla de Música.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function music(data) {
  return {
    type: reducerType.KEY_MUSIC, // Tipo de acción: TECLA_MÚSICA
    data,
  };
}

/**
 * @function pause
 * Crea una acción al pulsar la tecla de Pausa.
 * @param {boolean} data - Estado del botón (presionado/liberado).
 */
function pause(data) {
  return {
    type: reducerType.KEY_PAUSE, // Tipo de acción: TECLA_PAUSA
    data,
  };
}

// Exporta todas las acciones de teclado
export default {
  drop,
  down,
  left,
  right,
  rotate,
  reset,
  music,
  pause,
};