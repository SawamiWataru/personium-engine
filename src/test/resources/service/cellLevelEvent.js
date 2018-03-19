/*
 * Personium
 * Copyright 2014 - 2017 FUJITSU LIMITED
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Event受付のテスト.
 */
function(request){
    // 共通モジュール読み込み
    var util = require("testCommon");

    // クエリを解析し、Cell名を取得する
    var query = _p.util.queryParse(request.queryString);
    var cellName = query["cell"];

    // テスト用データ作成
    var event = {Type:"eventType",Object:"objectData",Info:"infoData"};

    try {
        // イベント登録
        _p.as("client").cell(cellName).event.post(event);

        // ログ取得(X-Personium-RequestKeyなし)_String
        var dav = _p.as("client").cell(cellName).currentLog.getString("default.log");

        return util.response().responseBody("OK").build();
    } catch (e) {
        return util.response().statusCode(e.code).responseBody(e.message).build();
    } finally {

    }
}