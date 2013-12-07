/**
 * Log
 *
 * Wrapper for console.log with custom colors.
 */
module.exports = {

  /**
   * @type {Object} _colorCodes 
   */
  _colorCodes: {
    RED: '\x1B[31m',
    GREEN: '\x1B[32m',
    YELLOW: '\x1B[33m'
  },

  /**
   * @param {String} message 
   */
  _log: function(message, colorCode) {

    if (typeof colorCode !== 'undefined') {
      message = colorCode + message + '\x1B[39m';
    }

    console.log(message);

  },

  /**
   * @method message 
   * @param {String} message
   */
  info: function(message) {
    this._log(message);
  },

  /**
   * @method error
   * @param {String} message
   */
  error: function(message) {
    this._log(message, this._colorCodes.RED);
  },

  /**
   * @method warning 
   * @param {String} message
   */
  warning: function(message) {
    this._log(message, this._colorCodes.YELLOW);
  },

  /**
   * @method ok 
   * @param {String} message
   */
  ok: function(message) {
    this._log(message, this._colorCodes.GREEN);
  }
  
};
