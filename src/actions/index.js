// Importaciones: Funciones utilitarias y Tipos de Acción
import { getNextType } from '../unit'; // Función para obtener el tipo de la siguiente pieza (tetromino)
import * as reducerType from '../unit/reducerType'; // Constantes de tipos de acción (e.g., 'NEXT_BLOCK')
import Block from '../unit/block'; // Clase o constructor para la pieza (bloque) actual
import keyboard from './keyboard'; // Módulo de acciones específicas del teclado (que debe exportarse aparte)

/**
 * @function nextBlock
 * Crea una acción para establecer la próxima pieza.
 * @param {string} next - El tipo de la próxima pieza (si se proporciona)
 */
function nextBlock(next = getNextType()) {
  return {
    type: reducerType.NEXT_BLOCK, // Tipo de acción: PRÓXIMO_BLOQUE
    data: next,
  };
}

/**
 * @function moveBlock
 * Crea una acción para mover, rotar o restablecer el bloque actual.
 * @param {object} option - Opciones para el movimiento (dirección, rotación)
 */
function moveBlock(option) {
  return {
    type: reducerType.MOVE_BLOCK, // Tipo de acción: MOVER_BLOQUE
    // Si la opción es 'reset', no se crea un nuevo bloque. Si no, se crea uno nuevo con las opciones dadas.
    data: option.reset === true ? null : new Block(option), 
  };
}

/**
 * @function speedStart
 * Crea una acción para establecer la velocidad inicial (nivel) del juego.
 * @param {number} n - Nivel o velocidad de inicio.
 */
function speedStart(n) {
  return {
    type: reducerType.SPEED_START, // Tipo de acción: VELOCIDAD_INICIO
    data: n,
  };
}

/**
 * @function speedRun
 * Crea una acción para cambiar la velocidad mientras el juego está en curso.
 * @param {number} n - Nivel o velocidad actual.
 */
function speedRun(n) {
  return {
    type: reducerType.SPEED_RUN, // Tipo de acción: VELOCIDAD_EN_CURSO
    data: n,
  };
}

/**
 * @function startLines
 * Crea una acción para establecer las líneas de inicio del juego.
 * @param {number} n - Número de líneas de inicio.
 */
function startLines(n) {
  return {
    type: reducerType.START_LINES, // Tipo de acción: LÍNEAS_DE_INICIO
    data: n,
  };
}

/**
 * @function matrix
 * Crea una acción para actualizar toda la matriz del tablero de juego.
 * @param {Array} data - La nueva matriz del tablero.
 */
function matrix(data) {
  return {
    type: reducerType.MATRIX, // Tipo de acción: MATRIZ_DEL_TABLERO
    data,
  };
}

/**
 * @function lock
 * Crea una acción para bloquear (deshabilitar) el juego, por ejemplo, en Game Over.
 * @param {boolean} data - Estado de bloqueo.
 */
function lock(data) {
  return {
    type: reducerType.LOCK, // Tipo de acción: BLOQUEAR_JUEGO
    data,
  };
}

/**
 * @function clearLines
 * Crea una acción para indicar que se han borrado líneas.
 * @param {number} data - Número de líneas borradas.
 */
function clearLines(data) {
  return {
    type: reducerType.CLEAR_LINES, // Tipo de acción: LÍNEAS_BORRADAS
    data,
  };
}

/**
 * @function points
 * Crea una acción para actualizar la puntuación del jugador.
 * @param {number} data - Puntuación actual o cambio de puntuación.
 */
function points(data) {
  return {
    type: reducerType.POINTS, // Tipo de acción: PUNTOS
    data,
  };
}

/**
 * @function max
 * Crea una acción para actualizar la puntuación máxima.
 * @param {number} data - Puntuación máxima.
 */
function max(data) {
  return {
    type: reducerType.MAX, // Tipo de acción: PUNTUACIÓN_MÁXIMA
    data,
  };
}

/**
 * @function reset
 * Crea una acción para restablecer el juego al estado inicial.
 * @param {boolean} data - Indica el estado de reseteo.
 */
function reset(data) {
  return {
    type: reducerType.RESET, // Tipo de acción: REINICIAR_JUEGO
    data,
  };
}

/**
 * @function drop
 * Crea una acción para la caída instantánea (hard drop) de la pieza.
 * @param {boolean} data - Estado de caída.
 */
function drop(data) {
  return {
    type: reducerType.DROP, // Tipo de acción: CAÍDA_INSTANTÁNEA
    data,
  };
}

/**
 * @function pause
 * Crea una acción para pausar o reanudar el juego.
 * @param {boolean} data - Estado de pausa (true/false).
 */
function pause(data) {
  return {
    type: reducerType.PAUSE, // Tipo de acción: PAUSA
    data,
  };
}

/**
 * @function music
 * Crea una acción para encender o apagar la música.
 * @param {boolean} data - Estado de la música.
 */
function music(data) {
  return {
    type: reducerType.MUSIC, // Tipo de acción: MÚSICA
    data,
  };
}

/**
 * @function focus
 * Crea una acción para manejar si la ventana del juego tiene foco.
 * @param {boolean} data - Estado de foco.
 */
function focus(data) {
  return {
    type: reducerType.FOCUS, // Tipo de acción: FOCO_VENTANA
    data,
  };
}

// Exporta todas las acciones para que puedan ser utilizadas por los componentes de React.
export default {
  nextBlock,
  moveBlock,
  speedStart,
  speedRun,
  startLines,
  matrix,
  lock,
  clearLines,
  points,
  reset,
  max,
  drop,
  pause,
  keyboard, // Acciones específicas del teclado importadas de otro archivo
  music,
  focus,
};