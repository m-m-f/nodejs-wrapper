/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var extend         = require('extend');
var requestFactory = require('../../lib/requestwrapper');

function TradeoffAnalytics(options) {
  // Default URL
  var defaultOptions = {
    url: 'https://gateway.watsonplatform.net/tradeoff-analytics/api'
  };

  // Replace default options with user provided
  this._options = extend(defaultOptions, options);
}

/**
 * Returns a dilemma that contains the problem and a resolution.
 * The problem contains a set of options and objectives.
 * The resolution contains a set of optimal options,
 * their analytical characteristics, and representation on a 2D space.
 *
 * @param  {Array}  params.columns List of possible objectives
 * @param  {String} params.subject Name of the decision problem
 * @param  {String} params.options A list of options. Typically, the rows in a
 *                                 table representation of your data
 */
TradeoffAnalytics.prototype.dilemmas = function(params, callback) {
  var parameters = {
    options: {
      method: 'POST',
      url: '/v1/dilemmas',
      body: params,
      json: true,
    },
    requiredParams: ['columns', 'subject', 'options'],
    defaultOptions: this._options
  };
  return requestFactory(parameters, callback);
};

module.exports = TradeoffAnalytics;
