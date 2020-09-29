export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const keyboard = {};   
keyboard.keys = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    INSERT: 45,
    DELETE: 46,
    KEY_0: 48,
    KEY_1: 49,
    KEY_2: 50,
    KEY_3: 51,
    KEY_4: 52,
    KEY_5: 53,
    KEY_6: 54,
    KEY_7: 55,
    KEY_8: 56,
    KEY_9: 57,
    KEY_A: 65,
    KEY_B: 66,
    KEY_C: 67,
    KEY_D: 68,
    KEY_E: 69,
    KEY_F: 70,
    KEY_G: 71,
    KEY_H: 72,
    KEY_I: 73,
    KEY_J: 74,
    KEY_K: 75,
    KEY_L: 76,
    KEY_M: 77,
    KEY_N: 78,
    KEY_O: 79,
    KEY_P: 80,
    KEY_Q: 81,
    KEY_R: 82,
    KEY_S: 83,
    KEY_T: 84,
    KEY_U: 85,
    KEY_V: 86,
    KEY_W: 87,
    KEY_X: 88,
    KEY_Y: 89,
    KEY_Z: 90,
    SELECT: 93,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    SEMICOLON: 186,
    EQUALS: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE_ACCENT: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222
};

// note that this dictionary is used for display purposes
// not all string values are what real keyCodes are like
// check the above object for real representations
export const reversedKeyboard = {};
reversedKeyboard.keys = {
    8: '&lArr;',
    9: 'TAB',
    13: '&#9166;',
    16: 'SHIFT',
    17: 'CTRL',
    18: 'ALT',
    19: 'PAUSE',
    20: 'C_LOCK',
    27: 'ESC',
    32: 'SPACE',
    33: 'PGUP',
    34: 'PGDN',
    35: 'END',
    36: 'HOME',
    37: '&larr;',
    38: '&uarr;',
    39: '&rarr;',
    40: '&darr;',
    45: 'INS',
    46: 'DEL',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    93: 'SELECT',
    96: 'N_0',
    97: 'N_1',
    98: 'N_2',
    99: 'N_3',
    100: 'N_4',
    101: 'N_5',
    102: 'N_6',
    103: 'N_7',
    104: 'N_8',
    105: 'N_9',
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'N_LOCK',
    145: 'S_LOCK',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '{',
    220: '\\',
    221: '}',
    222: '\''
};

const getInnerOuterEdgeColRow = (canvasWidth, canvasHeight, scale) => {
    const cols = Math.floor(canvasWidth / scale);
    const rows = Math.floor(canvasHeight / scale);

    const middleCol = Math.floor(cols / 2);
    const middleRow = Math.floor(rows / 2);

    const innerOuterEdgeCol = middleCol / 2;
    const innerOuterEdgeRow = middleRow / 2;

    return { 
        innerOuterEdgeCol: innerOuterEdgeCol, 
        innerOuterEdgeRow: innerOuterEdgeRow, 
        middleCol: middleCol, 
        middleRow: middleRow,
        cols: cols,
        rows: rows
    };
}

export const randomLocationNearMiddle = (canvasWidth, canvasHeight, scale) => {
    const { innerOuterEdgeCol, innerOuterEdgeRow, middleCol, middleRow } = 
    getInnerOuterEdgeColRow(canvasWidth, canvasHeight, scale);
    
    const randomPositiveInnerColDistance = Math.floor((Math.random() * innerOuterEdgeCol)) + 1;
    const randomInnerColDistance = randomPositiveInnerColDistance * (Math.random() > 0.5 ? 1 : -1);
    const randomPositiveInnerRowDistance = Math.floor((Math.random() * innerOuterEdgeRow)) + 1;
    const randomInnerRowDistance = randomPositiveInnerRowDistance * (Math.random() > 0.5 ? 1 : -1);

    const randomCol = middleCol + randomInnerColDistance;
    const randomRow = middleRow + randomInnerRowDistance;

    return { x: randomCol * scale, y: randomRow * scale };
}

export const randomLocationNearEdge = (canvasWidth, canvasHeight, scale) => {
    const { innerOuterEdgeCol, innerOuterEdgeRow, cols, rows } = 
    getInnerOuterEdgeColRow(canvasWidth, canvasHeight, scale);
    
    const randomOuterColDistance = Math.floor(Math.random() * innerOuterEdgeCol);
    const randomOuterRowDistance = Math.floor(Math.random() * innerOuterEdgeRow);

    const horizontal = Math.random();
    const vertical = Math.random();

    let randomCol;
    let randomRow;

    // near left
    if (horizontal < 0.33) {
        // skip first column since the snake is spawned at the beginning
        randomCol = 1 + randomOuterColDistance;
    }
    // near right
    else if (horizontal < 0.66) {
        randomCol = cols - randomOuterColDistance;
    }
    // near middle
    else {
        const leftMiddle = Math.random() > 0.5;
        if (leftMiddle) {
            randomCol = cols / 2 - randomOuterColDistance;
        }
        else {
            randomCol = cols / 2 + randomOuterColDistance;
        }
    }

    // near top
    if (vertical < 0.33) {
        // skip first row since the snake is spawned at the beginning
        randomRow = 1 + randomOuterRowDistance;
    }
    // near bottom
    else if (vertical < 0.66) {
        randomRow = rows - randomOuterRowDistance;
    }
    // near middle
    else {
        const topMiddle = Math.random() > 0.5;
        if (topMiddle) {
            randomRow = rows / 2 - randomOuterRowDistance;
        }
        else {
            randomRow = rows / 2 + randomOuterRowDistance;
        }
    }

    return { x: randomCol * scale, y: randomRow * scale };
}