// Member history
// groupCode=b852d3b1fccd73c8c1926d47fbab68da&memberId=14794653&pin=1234&startDate=04%2F02%2F2021&endDate=10%2F02%2F2021&timezone=Asia%2FKuala_Lumpur

// Send Temperature
// groupCode=b852d3b1fccd73c8c1926d47fbab68da&date=10%2F02%2F2021&meridies=PM&memberId=14794653&temperature=36.6&pin=1234

// var data;
// var neServer = "https://temptaking-ne.ado.sg/group/";

// function refreshPage() {
//     window.location.href = data.groupCode;
// }

// function getDate() {
//     var d = new Date();
//     var today = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
//     return today;
// }

// function getMeridies() {
//     var d = new Date();
//     var meridies;
//     if (d.getHours() > 12) {
//         meridies = "PM";
//     } else if (d.getHours() < 12) {
//         meridies = "AM";
//     } else {
//         if (d.getMinutes() > 0) {
//             meridies = "PM";
//         } else {
//             if (d.getSeconds() > 0) {
//                 meridies = "PM";
//             } else {
//                 meridies = "AM";
//             }
//         }
//     }
//     return meridies;
// }

// function loadContents(requestScopeData, requestScopeError) {
//     var content = "";
//     if (requestScopeError) {
//         content = requestScopeError;
//     } else {
//         var memberId = loadMember();

//         data = $.parseJSON(requestScopeData);
//         content += '<div id="overall-container" style="display: None;">';
//         content += '<div style="width: calc(100% - 90px); float: left;" class="date-input-group">';
//         content += '<input class="form-control" id="date-input" type="date" value="' + moment(getDate(), "DD/MM/YYYY").format("YYYY-MM-DD") + '"/>';
//         content += '</div>';
//         content += '<div style="width: 85px; float: right; line-height: 38px; margin-left: 5px; text-align: right">';
//         content += '<select id="meridies-input" class="form-control">';
//         if (getMeridies() === "AM") {
//             content += '<option value="AM" selected>AM</option>';
//         } else {
//             content += '<option value="AM">AM</option>';
//             content += '<option value="PM" selected>PM</option>';
//         }
//         content += '</select>';
//         content += '</div>';
//         content += '</div>';
//         content += "<br/>";
//         content += "<br/>";
//         content += '<div>';
//         content += '<div style="width: calc(100% - 90px); float: left;">';
//         content += '<select id="member-select" class="form-control" style="width: 100%">';
//         content += '<option value="-1">Select member...</option>';
//         for (var i = 0; i < data.members.length; i++) {
//             var m = data.members[i];
//             if (memberId && memberId === m.id) {
//                 content += '<option value="' + m.id + '" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" selected>' + m.identifier + '</option>';
//             } else {
//                 content += '<option value="' + m.id + '" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">' + m.identifier + '</option>';
//             }
//         }
//         content += "</select>";
//         content += '</div>';
//         content += '<button style="width: 85px; float: right; height: 38px; margin-left: 5px;" class="btn btn-outline-info" id="member-history-btn">History</button>';
//         content += '</div>';
//         content += "<br/>";
//         content += "<br/>";

//         var numberPattern = 'pattern="[0-9]{1}"';
//         var securityStyle = '-webkit-text-security: disc;';
//         content += '<hr/>';
//         content += '<div id="create-pin-container" style="display: None">';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Create Pin</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cp1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cp2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cp3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cp4" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '</div>';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Confirm Pin</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cfp1" class="form-control" maxlength="1" style="width: 25%; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cfp2" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cfp3" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cfp4" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '<small class="form-text text-muted"><div id="newpin-match-indicator"></div></small>';
//         content += '</div>';
//         content += '<div id="create-pin-error"></div>';
//         content += '<button style="width: 80%; margin-left: 10%; margin-top: 20px; font-weight: bold; border-radius: 20px;" ';
//         content += 'class="btn btn-secondary" id="create-pin-btn" disabled>CREATE PIN</button>';
//         content += '</div>';

//         content += '<div id="submit-temperature-container" style="display: None">';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Enter Pin</b>';
//         content += '<span style="float: right; color: #007BA4; text-decoration: underline;" onclick="loadChangePin();">Change Pin</span>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ep1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ep2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ep3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ep4" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '<div style="text-align: center;"><small class="text-muted">To reset pin, please contact your group admin.</small></div>';
//         content += '</div>';
//         content += '<div style="margin-top: 20px;">';
//         content += '<b>Enter Temperature</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="td1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px;"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="td2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px;"/>';
//         content += '&nbsp;&bull;&nbsp;';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="td3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px; text-align: center; height: 38px;"/>';
//         content += '&nbsp;&deg;C';
//         content += '</div>';
//         content += "</div>";
//         content += '<button style="width: 80%; margin-left: 10%; margin-top: 20px; color: #007BA4; font-weight: bold; border-radius: 20px;" ';
//         content += 'class="btn btn-warning" onclick="loadConfirmationModal();">SUBMIT</button>';
//         content += '</div>';

//         content += '<div id="change-pin-container" style="display: None;">';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Enter Current Pin</b>';
//         content += '<span style="float: right; color: #007BA4; text-decoration: underline;" onclick="loadSubmitTempContainer();">Cancel</span>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ecp1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ecp2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ecp3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="ecp4" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '</div>';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Enter New Pin</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="enp1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="enp2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="enp3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="enp4" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '</div>';
//         content += '<div style="margin-top: 10px">';
//         content += '<b>Confirm New Pin</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cenp1" class="form-control" maxlength="1" style="width: 25%; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cenp2" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cenp3" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="cenp4" class="form-control" maxlength="1" style="width: 25%; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '<small class="form-text text-muted"><div id="changepin-match-indicator"></div></small>';
//         content += '<div id="change-pin-error"></div>';
//         content += '<button style="width: 80%; margin-left: 10%; margin-top: 20px; font-weight: bold; border-radius: 20px;" ';
//         content += 'class="btn btn-secondary" id="change-pin-btn" disabled>CHANGE PIN</button>';
//         content += '</div>';
//         content += '</div>';
//         content += '<br/>';

//         $("#group-name-container").html(data.groupName);
//     }

//     var deferred = $.Deferred();
//     $("#main-content").html(content);
//     $("#results-container").hide();
//     $("#main-content-with-title").show();
//     deferred.resolve();
//     $.when(deferred).done(function () {
//         $("#date-input").on("change", function () {
//             var content = "";
//             if ($("#date-input").val() === moment(getDate(), "DD/MM/YYYY").format("YYYY-MM-DD")) {
//                 if (getMeridies() === "AM") {
//                     content += '<option value="AM" selected>AM</option>';
//                 } else {
//                     content += '<option value="AM">AM</option>';
//                     content += '<option value="PM" selected>PM</option>';
//                 }
//             } else {
//                 content += '<option value="AM">AM</option>';
//                 content += '<option value="PM">PM</option>';
//             }
//             $("#meridies-input").html(content);
//         });

//         if (memberId) {
//             var m;
//             for (var i = 0; i < data.members.length; i++) {
//                 if (data.members[i].id === memberId) {
//                     m = data.members[i];
//                     break;
//                 }
//             }

//             if (m) {
//                 if (!m.hasPin) {
//                     loadCreatePinContainer();
//                 } else {
//                     loadSubmitTempContainer();
//                 }
//             }
//         }


//         $("#member-select").on("change", function () {
//             var memberId = $("#member-select option:selected").val();
//             if (memberId === "-1") {
//                 forgetMember();
//             } else {
//                 saveMember(memberId);
//             }
//             var m;

//             var deferred2 = $.Deferred();
//             for (var i = 0; i < data.members.length; i++) {
//                 if (data.members[i].id === memberId) {
//                     m = data.members[i];
//                     break;
//                 }
//             }
//             deferred2.resolve();

//             $.when(deferred2).done(function () {
//                 if (m) {
//                     if (!m.hasPin) {
//                         loadCreatePinContainer();
//                     } else {
//                         loadSubmitTempContainer();
//                     }
//                 } else {
//                     closeAllContainers();
//                 }
//             });
//         });

//         $("#member-history-btn").on('click', function () {
//             loadHistoryModal();
//         });

//         $("#overall-container").show();
//     });
// }

// function loadHistoryModal() {
//     var deferred = $.Deferred();
//     var memberId = $("#member-select option:selected").val();

//     var title = "Past Records";
//     var content = "";
//     var footer = '<button class="btn btn-primary action-btn" data-dismiss="modal">Close</button>';

//     if (memberId === "-1") {
//         content = "Please select member to view past temperature records.";
//     } else {
//         var numberPattern = 'pattern="[0-9]{1}"';
//         var securityStyle = '-webkit-text-security: disc;';
//         content += '<div id="history-pin-container">';
//         content += '<b>Enter Pin</b>';
//         content += '<div class="form-inline">';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="hep1" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 10px 0px 0px 10px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="hep2" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="hep3" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px; text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '<input type="number" ' + numberPattern + ' inputmode="numeric" id="hep4" class="form-control" maxlength="1" style="width: 25%; padding: 0px; border-radius: 0px 10px 10px 0px;  text-align: center; height: 38px; ' + securityStyle + '"/>';
//         content += '</div>';
//         content += '<button style="width: 80%; margin-left: 10%; margin-top: 20px; color: #007BA4; font-weight: bold; border-radius: 20px;" ';
//         content += 'class="btn btn-warning" onclick="authenticateForPastRecords();">Authenticate</button>';
//         content += '</div>';

//         content += '<div id="history-records-container" style="display: none;">';
//         content += '<b>Records from:</b><br/>';
//         content += '<input class="form-control" type="date" id="history-start-date-input" style="text-align: center; width: calc(50% - 11px); float: left;">';
//         content += '<div style="width: 22px; float: left; line-height: 38px;">&nbsp;to&nbsp;</div>';
//         content += '<input class="form-control" type="date" id="history-end-date-input" style="text-align: center; width: calc(50% - 11px); float: right;">';
//         content += '<br/>';

//         content += '<table id="temp-history-table" class="table table-bordered table-striped" cellpadding="0px" cellspacing="0px" style="table-layout: fixed; margin-top: 25px;">';
//         content += '<thead><tr>';
//         content += '<th >Date</th>';
//         content += '<th style="width: 90px; text-align: center">AM</th>';
//         content += '<th style="width: 90px; text-align: center">PM</th>';
//         content += '</tr></thead>';

//         content += '<tbody id="history-records-table" class="panel">';
//         content += '</tbody>';
//         content += '</table>';
//         content += '</div>';
//         content += '<div id="error-message"></div>';
//     }

//     $("#modal-title").html(title);
//     $("#modal-body").html(content);
//     $("#modal-footer").html(footer);
//     deferred.resolve();

//     $.when(deferred).done(function () {
//         var deferred2 = $.Deferred();
//         var prevNextDivs = {
//             "#hep1": {"prev": "#hep1", "next": "#hep2"},
//             "#hep2": {"prev": "#hep1", "next": "#hep3"},
//             "#hep3": {"prev": "#hep2", "next": "#hep4"},
//             "#hep4": {"prev": "#hep3", "next": ""}
//         };

//         var divIds = Object.keys(prevNextDivs);
//         var divIdSelectors = divIds.join(", ");

//         $(divIdSelectors).val("");

//         $(divIdSelectors).on("keyup", function (event) {
//             var valLength = $(this).val().length;
//             var currId = "#" + $(this).attr("id");
//             var value = $(this).val();
//             var keyCode = event.keyCode;

//             if (!isDelete(keyCode) && isNumber(value)) {
//                 $(this).val(value[0] + " ");
//                 $(this).val(value[0]);

//                 if (valLength === 1) {
//                     if (prevNextDivs[currId].next.length === 0) {
//                         $(this).blur();
//                     } else {
//                         $(prevNextDivs[currId].next).focus();
//                     }
//                 }

//                 if (valLength > 1) {
//                     if (prevNextDivs[currId].next.length === 0) {
//                         $(this).blur();
//                     } else {
//                         $(prevNextDivs[currId].next).val(value[1] + " ");
//                         $(prevNextDivs[currId].next).val(value[1]);
//                         $(prevNextDivs[currId].next).focus();
//                     }
//                 }
//             }

//             event.preventDefault();
//             return false;
//         });

//         $(divIdSelectors).on("keydown", function (event) {
//             var valLength = $(this).val().length;
//             var keyCode = event.keyCode;
//             var currId = "#" + $(this).attr("id");

//             if (isDelete(keyCode)) {
//                 if (valLength === 0) {
//                     $(prevNextDivs[currId].prev).val("");
//                 } else {
//                     $(this).val("");
//                 }
//                 $(prevNextDivs[currId].prev).focus();

//                 event.preventDefault();
//                 return false;
//             }
//         });

//         var endDate = moment(getDate(), "DD/MM/YYYY");
//         var startDate = endDate.clone().subtract(6, 'days');
//         $("#history-end-date-input").val(endDate.format("YYYY-MM-DD"));
//         $("#history-start-date-input").val(startDate.format("YYYY-MM-DD"));
//         $("#history-end-date-input").attr("max", endDate.format("YYYY-MM-DD"));
//         $("#history-end-date-input").attr("min", startDate.format("YYYY-MM-DD"));
//         $("#history-start-date-input").attr("max", endDate.format("YYYY-MM-DD"));

//         $("#history-end-date-input").on('change', function () {
//             var newEndDate = moment($("#history-end-date-input").val(), "YYYY-MM-DD");

//             if (endDate.diff(newEndDate, 'days') >= 0) {
//                 $("#history-start-date-input").attr("max", newEndDate.format("YYYY-MM-DD"));
//                 authenticateForPastRecords();
//             }
//         });

//         $("#history-start-date-input").on('change', function () {
//             var newStartDate = moment($("#history-start-date-input").val(), "YYYY-MM-DD");

//             if (endDate.diff(newStartDate, 'days') >= 0) {
//                 $("#history-end-date-input").attr("min", newStartDate.format("YYYY-MM-DD"));
//                 authenticateForPastRecords();
//             }
//         });

//         deferred2.resolve();

//         $.when(deferred2).done(function () {
//             $("#modal").modal("show");
//             setTimeout(function () {
//                 $("#hep1").focus();
//             }, 500);
//         });
//     });
// }

// function authenticateForPastRecords() {
//     var deferred = $.Deferred();
//     var memberId = $("#member-select option:selected").val();
//     var pin = $("#hep1").val() + $("#hep2").val() + $("#hep3").val() + $("#hep4").val();
//     var startDate = moment($("#history-start-date-input").val(), "YYYY-MM-DD").format("DD/MM/YYYY");
//     var endDate = moment($("#history-end-date-input").val(), "YYYY-MM-DD").format("DD/MM/YYYY");
//     var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     deferred.resolve();

//     $.when(deferred).done(function () {
//         if (memberId !== "-1" && pin.length === 4) {
//             $.ajax({
//                 type: 'post',
//                 url: neServer + 'MemberListPastRecords',
//                 data: {
//                     groupCode: data.groupCode,
//                     memberId: memberId,
//                     pin: pin,
//                     startDate: startDate,
//                     endDate: endDate,
//                     timezone: timezone
//                 }
//             }).done(function (resultsStr) {
//                 if (resultsStr.length === 0) {
//                     $("#error-message").html("<span style='color: red'><br/>Wrong pin or invalid date range.</span>");
//                 } else {
//                     var results = $.parseJSON(resultsStr);
//                     var content = "";
//                     for (var i = 0; i < results.length; i++) {
//                         content += '<tr>';
//                         content += '<td>' + results[i].date + '</td>';
//                         if (results[i].latestAM.length === 0) {
//                             content += '<td align="center">Nil</td>';
//                         } else {
//                             content += '<td align="center">' + results[i].latestAM + '&deg;C</td>';
//                         }

//                         if (results[i].latestPM.length === 0) {
//                             content += '<td align="center">Nil</td>';
//                         } else {
//                             content += '<td align="center">' + results[i].latestPM + '&deg;C</td>';
//                         }
//                         content += '</tr>';
//                     }

//                     $("#history-records-table").html(content);
//                     $("#history-pin-container").hide();
//                     $("#history-records-container").show();
//                     $("#error-message").html("");
//                 }
//             });
//         } else {
//             $("#error-message").html("<span style='color: red'><br/>Wrong pin.</span>");
//         }
//     });
// }

// function closeAllContainers() {
//     $("#submit-temperature-container").hide();
//     $("#change-pin-container").hide();
//     $("#create-pin-container").hide();
// }

// function isNumber(value) {
//     return value.match(/\d+/g);
// }

// function isDelete(keyCode) {
//     return keyCode === 46 || keyCode === 8;
// }

// function loadChangePin() {
//     var prevNextDivs = {
//         "#ecp1": {"prev": "#ecp1", "next": "#ecp2"},
//         "#ecp2": {"prev": "#ecp1", "next": "#ecp3"},
//         "#ecp3": {"prev": "#ecp2", "next": "#ecp4"},
//         "#ecp4": {"prev": "#ecp3", "next": "#enp1"},
//         "#enp1": {"prev": "#enp1", "next": "#enp2"},
//         "#enp2": {"prev": "#enp1", "next": "#enp3"},
//         "#enp3": {"prev": "#enp2", "next": "#enp4"},
//         "#enp4": {"prev": "#enp3", "next": "#cenp1"},
//         "#cenp1": {"prev": "#cenp1", "next": "#cenp2"},
//         "#cenp2": {"prev": "#cenp1", "next": "#cenp3"},
//         "#cenp3": {"prev": "#cenp2", "next": "#cenp4"},
//         "#cenp4": {"prev": "#cenp3", "next": ""}
//     };

//     var divIds = Object.keys(prevNextDivs);
//     var divIdSelectors = divIds.join(", ");

//     $(divIdSelectors).val("");
//     $("#changepin-match-indicator").html("");
//     $("#change-pin-error").html("");

//     $(divIdSelectors).on("keyup", function (event) {
//         var valLength = $(this).val().length;
//         var currId = "#" + $(this).attr("id");
//         var value = $(this).val();
//         var keyCode = event.keyCode;

//         if (!isDelete(keyCode) && isNumber(value)) {
//             $(this).val(value[0] + " ");
//             $(this).val(value[0]);

//             if (valLength === 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }

//             if (valLength > 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).val(value[1] + " ");
//                     $(prevNextDivs[currId].next).val(value[1]);
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }
//         }

//         var oldPin = $("#ecp1").val() + $("#ecp2").val() + $("#ecp3").val() + $("#ecp4").val();
//         var newPin = $("#enp1").val() + $("#enp2").val() + $("#enp3").val() + $("#enp4").val();
//         var cfmPin = $("#cenp1").val() + $("#cenp2").val() + $("#cenp3").val() + $("#cenp4").val();

//         if (oldPin.length === 4 && newPin.length === 4 & cfmPin.length === 4) {
//             if (newPin !== cfmPin) {
//                 $("#changepin-match-indicator").html('<span style="color: red;">Pins do not match.</span>');
//                 $("#change-pin-btn").removeClass("btn-warning");
//                 $("#change-pin-btn").addClass("btn-secondary");
//                 $("#change-pin-btn").css("color", "white");
//                 $("#change-pin-btn").attr("disabled", true);
//             } else {
//                 $("#changepin-match-indicator").html('<span style="color: green;">Pins match.</span>');
//                 $("#change-pin-btn").removeClass("btn-secondary");
//                 $("#change-pin-btn").addClass("btn-warning");
//                 $("#change-pin-btn").css("color", "#007BA4");
//                 $("#change-pin-btn").attr("disabled", false);
//             }
//         } else {
//             $("#change-pin-btn").removeClass("btn-warning");
//             $("#change-pin-btn").addClass("btn-secondary");
//             $("#change-pin-btn").css("color", "white");
//             $("#change-pin-btn").attr("disabled", true);
//             $("#changepin-match-indicator").html("");
//         }
//         $("#change-pin-error").html("");

//         event.preventDefault();
//         return false;
//     });

//     $(divIdSelectors).on("keydown", function (event) {
//         var valLength = $(this).val().length;
//         var keyCode = event.keyCode;
//         var currId = "#" + $(this).attr("id");

//         if (isDelete(keyCode)) {
//             if (valLength === 0) {
//                 $(prevNextDivs[currId].prev).val("");
//             } else {
//                 $(this).val("");
//             }
//             $(prevNextDivs[currId].prev).focus();

//             event.preventDefault();
//             return false;
//         }
//     });

//     $("#change-pin-btn").on("click", submitChangePin);
//     $("#create-pin-container").hide();
//     $("#submit-temperature-container").hide();
//     $("#change-pin-container").show();
//     $("#ecp1").focus();
// }

// function loadCreatePinContainer() {
//     var prevNextDivs = {
//         "#cp1": {"prev": "#cp1", "next": "#cp2"},
//         "#cp2": {"prev": "#cp1", "next": "#cp3"},
//         "#cp3": {"prev": "#cp2", "next": "#cp4"},
//         "#cp4": {"prev": "#cp3", "next": "#cfp1"},
//         "#cfp1": {"prev": "#cfp1", "next": "#cfp2"},
//         "#cfp2": {"prev": "#cfp1", "next": "#cfp3"},
//         "#cfp3": {"prev": "#cfp2", "next": "#cfp4"},
//         "#cfp4": {"prev": "#cfp3", "next": ""}
//     };

//     var divIds = Object.keys(prevNextDivs);
//     var divIdSelectors = divIds.join(", ");

//     $(divIdSelectors).val("");
//     $("#newpin-match-indicator").html("");
//     $("#create-pin-error").html("");

//     $(divIdSelectors).on("keyup", function (event) {
//         var valLength = $(this).val().length;
//         var currId = "#" + $(this).attr("id");
//         var value = $(this).val();
//         var keyCode = event.keyCode;

//         if (!isDelete(keyCode) && isNumber(value)) {
//             $(this).val(value[0] + " ");
//             $(this).val(value[0]);

//             if (valLength === 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }

//             if (valLength > 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).val(value[1] + " ");
//                     $(prevNextDivs[currId].next).val(value[1]);
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }
//         }

//         var pin = $("#cp1").val() + $("#cp2").val() + $("#cp3").val() + $("#cp4").val();
//         var cfmPin = $("#cfp1").val() + $("#cfp2").val() + $("#cfp3").val() + $("#cfp4").val();

//         if (pin.length === 4 & cfmPin.length === 4) {
//             if (pin !== cfmPin) {
//                 $("#newpin-match-indicator").html('<span style="color: red;">Pins do not match.</span>');
//                 $("#create-pin-btn").removeClass("btn-warning");
//                 $("#create-pin-btn").addClass("btn-secondary");
//                 $("#create-pin-btn").css("color", "white");
//                 $("#create-pin-btn").attr("disabled", true);
//             } else {
//                 $("#newpin-match-indicator").html('<span style="color: green;">Pins match.</span>');
//                 $("#create-pin-btn").removeClass("btn-secondary");
//                 $("#create-pin-btn").addClass("btn-warning");
//                 $("#create-pin-btn").css("color", "#007BA4");
//                 $("#create-pin-btn").attr("disabled", false);
//             }
//         } else {
//             $("#create-pin-btn").removeClass("btn-warning");
//             $("#create-pin-btn").addClass("btn-secondary");
//             $("#create-pin-btn").css("color", "white");
//             $("#create-pin-btn").attr("disabled", true);
//             $("#newpin-match-indicator").html("");
//         }
//         $("#change-pin-error").html("");

//         event.preventDefault();
//         return false;
//     });

//     $(divIdSelectors).on("keydown", function (event) {
//         var valLength = $(this).val().length;
//         var keyCode = event.keyCode;
//         var currId = "#" + $(this).attr("id");

//         if (isDelete(keyCode)) {
//             if (valLength === 0) {
//                 $(prevNextDivs[currId].prev).val("");
//             } else {
//                 $(this).val("");
//             }
//             $(prevNextDivs[currId].prev).focus();

//             event.preventDefault();
//             return false;
//         }
//     });

//     $("#create-pin-btn").on("click", createPin);
//     $("#submit-temperature-container").hide();
//     $("#change-pin-container").hide();
//     $("#create-pin-container").show(0, function () {
//         setTimeout(function () {
//             $("#cp1").focus();
//         }, 100);
//     });
// }

// function loadSubmitTempContainer() {
//     var prevNextDivs = {
//         "#ep1": {"prev": "#ep1", "next": "#ep2"},
//         "#ep2": {"prev": "#ep1", "next": "#ep3"},
//         "#ep3": {"prev": "#ep2", "next": "#ep4"},
//         "#ep4": {"prev": "#ep3", "next": "#td1"},
//         "#td1": {"prev": "#td1", "next": "#td2"},
//         "#td2": {"prev": "#td1", "next": "#td3"},
//         "#td3": {"prev": "#td2", "next": ""}
//     };

//     var divIds = Object.keys(prevNextDivs);
//     var divIdSelectors = divIds.join(", ");

//     $(divIdSelectors).val("");

//     $(divIdSelectors).on("keyup", function (event) {
//         var valLength = $(this).val().length;
//         var currId = "#" + $(this).attr("id");
//         var value = $(this).val();
//         var keyCode = event.keyCode;

//         if (!isDelete(keyCode) && isNumber(value)) {
//             $(this).val(value[0] + " ");
//             $(this).val(value[0]);

//             if (valLength === 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }

//             if (valLength > 1) {
//                 if (prevNextDivs[currId].next.length === 0) {
//                     $(this).blur();
//                 } else {
//                     $(prevNextDivs[currId].next).val(value[1] + " ");
//                     $(prevNextDivs[currId].next).val(value[1]);
//                     $(prevNextDivs[currId].next).focus();
//                 }
//             }
//         }

//         event.preventDefault();
//         return false;
//     });

//     $(divIdSelectors).on("keydown", function (event) {
//         var valLength = $(this).val().length;
//         var keyCode = event.keyCode;
//         var currId = "#" + $(this).attr("id");

//         if (isDelete(keyCode)) {
//             if (valLength === 0) {
//                 $(prevNextDivs[currId].prev).val("");
//             } else {
//                 $(this).val("");
//             }
//             $(prevNextDivs[currId].prev).focus();

//             event.preventDefault();
//             return false;
//         }
//     });

//     $("#change-pin-container").hide();
//     $("#create-pin-container").hide();
//     $("#submit-temperature-container").show(0, function () {
//         setTimeout(function () {
//             $("#ep1").focus();
//         }, 100);
//     });

// }

// function submitChangePin() {
//     var memberId = $("#member-select option:selected").val();
//     var oldPin = $("#ecp1").val() + $("#ecp2").val() + $("#ecp3").val() + $("#ecp4").val();
//     var newPin = $("#enp1").val() + $("#enp2").val() + $("#enp3").val() + $("#enp4").val();
//     var cfmPin = $("#cenp1").val() + $("#cenp2").val() + $("#cenp3").val() + $("#cenp4").val();

//     if (oldPin.length === 4 && newPin.length === 4 & cfmPin.length === 4 && newPin === cfmPin) {
//         $.ajax({
//             type: 'post',
//             url: 'MemberUpdatePin',
//             data: {
//                 groupCode: data.groupCode,
//                 memberId: memberId,
//                 oldPin: oldPin,
//                 newPin: newPin
//             }
//         }).done(function (results) {
//             if (results === "OK") {
//                 loadPinChangedModal();
//             } else {
//                 $("#change-pin-error").html("<span style='color: red'>" + results + "</span>");
//             }
//         });
//     }
// }

// function loadPinChangedModal() {
//     var deferred = $.Deferred();
//     var title = "Change Pin";
//     var content = "Your pin has been changed.<br/>Use new pin for temperature submissions.";
//     var footer = '<button class="btn btn-primary action-btn" data-dismiss="modal">Close</button>';

//     $("#modal-title").html(title);
//     $("#modal-body").html(content);
//     $("#modal-footer").html(footer);
//     deferred.resolve();

//     $.when(deferred).done(function () {
//         $("#modal").modal("show");
//         $("#modal").on('hidden.bs.modal', function () {
//             loadSubmitTempContainer();
//         });
//     });
// }

// function createPin() {
//     var memberId = $("#member-select option:selected").val();
//     var pin = $("#cp1").val() + $("#cp2").val() + $("#cp3").val() + $("#cp4").val();
//     var cfmPin = $("#cfp1").val() + $("#cfp2").val() + $("#cfp3").val() + $("#cfp4").val();
//     if (pin.length === 4 && cfmPin.length === 4 && pin === cfmPin) {
//         $.ajax({
//             type: 'post',
//             url: 'MemberCreatePin',
//             data: {
//                 groupCode: data.groupCode,
//                 memberId: memberId,
//                 pin: pin
//             }
//         }).done(function (results) {
//             if (results === "OK") {
//                 for (var i = 0; i < data.members.length; i++) {
//                     if (data.members[i].id === memberId) {
//                         data.members[i].hasPin = true;
//                     }
//                 }
//                 loadPinCreatedModal();
//             } else {
//                 $("#create-pin-error").html("<span style='color: red'>" + results + "</span>");
//             }
//         });
//     }
// }

// function loadPinCreatedModal() {
//     var deferred = $.Deferred();
//     var title = "Create Pin";
//     var content = "Your pin has been created.<br/>Use pin for temperature submissions.";
//     var footer = '<button class="btn btn-primary action-btn" data-dismiss="modal">Close</button>';

//     $("#modal-title").html(title);
//     $("#modal-body").html(content);
//     $("#modal-footer").html(footer);
//     deferred.resolve();

//     $.when(deferred).done(function () {
//         $("#modal").modal("show");
//         $("#modal").on('hidden.bs.modal', function () {
//             loadSubmitTempContainer();
//         });
//     });
// }

// function getTemp() {
//     var td1 = $("#td1").val();
//     var td2 = $("#td2").val();
//     var td3 = $("#td3").val();

//     if (td1.length === 0) {
//         td1 = 0;
//     }

//     if (td2.length === 0) {
//         td2 = 0;
//     }

//     if (td3.length === 0) {
//         td3 = 0;
//     }
//     return td1 + td2 + "." + td3;
// }

// function loadConfirmationModal() {
//     var deferred = $.Deferred();
//     var title = "Submit Temperature";
//     var date = $("#date-input").val();
//     var meridies = $("#meridies-input option:selected").html();
//     var temp = getTemp();
//     var patt1 = /\d\d\.\d/;
//     var patt2 = /\d\d/;
//     if (!temp.match(patt1) && !temp.match(patt2)) {
//         var content = "<span style='color: red'>Invalid temperature.</font>";
//         var footer = '<button id="close-modal-btn" class="btn btn-danger action-btn" data-dismiss="modal">Back</button>';
//     } else {
//         var content = "";
//         content += "Date: " + moment(date, "YYYY-MM-DD").format("DD/MM/YYYY") + ", " + meridies + "<br/>";
//         content += "Member: " + $("#member-select option:selected").html() + "<br/>";
//         content += "Temperature: " + temp + "&deg;C<br/>";
//         content += "<div id='error-message'></div>";
//         var footer = "";
//         footer += '<button id="submit-temp-btn" class="btn btn-primary action-btn">Confirm</button>';
//         footer += '<button id="close-modal-btn" class="btn btn-danger action-btn" data-dismiss="modal" style="display: None;">Back</button>';
//     }
//     $("#modal-title").html(title);
//     $("#modal-body").html(content);
//     $("#modal-footer").html(footer);
//     deferred.resolve();
//     $.when(deferred).done(function () {
//         $("#modal").modal('show');
//         $('#submit-temp-btn').on("click", function () {
//             submitTemperature();
//         });
//         $("#close-modal-btn").on("click", function () {
//             loadSubmitTempContainer();
//         });
//     });
// }

// function submitTemperature() {
//     var pin = $("#ep1").val() + $("#ep2").val() + $("#ep3").val() + $("#ep4").val();
//     var date = $("#date-input").val();
//     var temperature = getTemp();
//     var meridies = $("#meridies-input option:selected").html();
//     if (moment(date, "YYYY-MM-DD") <= moment(getDate(), "DD/MM/YYYY")) {
//         $.ajax({
//             type: "post",
//             url: "MemberSubmitTemperature",
//             data: {
//                 groupCode: data.groupCode,
//                 date: moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"),
//                 meridies: meridies,
//                 memberId: $("#member-select option:selected").val(),
//                 temperature: temperature,
//                 pin: pin
//             }
//         }).done(function (results) {
//             if (results === "OK") {
//                 $("#modal").modal("hide");
//                 var dbleTemp = parseFloat(temperature);
//                 if (dbleTemp >= 38.0) {
//                     $("#main-content-with-title").hide();
//                     $("#results-container").show();
//                     $("#no-fever-container").hide();
//                     $("#fever-container").show();
//                 } else {
//                     $("#main-content-with-title").hide();
//                     $("#results-container").show();
//                     $("#fever-container").hide();
//                     $("#no-fever-container").show();
//                 }
//             } else {
//                 $("#error-message").html("<br/><span style='color: red'>" + results + "</span>");
//                 $("#submit-temp-btn").hide();
//                 $("#close-modal-btn").show();
//                 $("#close-modal-btn").on("click", function () {
//                     loadSubmitTempContainer();
//                 });
//             }
//         });
//     } else {
//         $("#error-message").html("<br/><span style='color: red'>You can't submit a temperature for a future date.</span>");
//         $("#submit-temp-btn").hide();
//         $("#close-modal-btn").show();
//         $("#close-modal-btn").on("click", function () {
//             loadSubmitTempContainer();
//         });
//     }
// }

// function saveMember(memberId) {
//     setCookie("memberId", memberId, 7);
// }

// function forgetMember() {
//     setCookie("memberId", "", -1);
// }

// function loadMember() {
//     return getCookie("memberId");
// }

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";";
// }

// function submitFeedback() {
//     $.ajax({
//         type: "post",
//         url: "../Feedback",
//         data: {
//             email: $("#feedbackEmail").val(),
//             feedback: $("#feedbackFeedback").val()
//         }
//     }).done(function (results) {
//         if (results === "OK") {
//             $("#modal").modal('hide');
//             showSnackbar("Thank you for your feedback!", false);
//         } else {
//             $("#error-message").html("<br/><span style='color: red'>" + results + "</span>");
//         }

//     });
// }