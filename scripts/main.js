function updateElement(className, value) {
    let elements = document.getElementsByClassName(className);
    for (let i =0;i<elements.length;i++) {
        elements[i].innerHTML = value;
    }
}
function updateField(position, title, value) {
    let titles = document.getElementsByClassName('discord-field-title');
    for (let i = 0; i<titles.length;i++) {
        if (i == position) titles[i].innerHTML = title;
    }
    let values = document.getElementsByClassName('discord-embed-field-value');
    for (let j = 0; j<values.length;j++) {
        if (j == position)  values[j].innerHTML = value;
    }
}
function messageInit(time, command) {
    updateElement('discord-message-body', '.' + command);
    updateElement('discord-message-timestamp', 'Today at ' + time);
    updateElement('flex-none',"Today at " + time);
    updateField(0, "","");
    updateField(1, "","");
    updateField(2, "","");
    updateField(3, "","");
    updateField(4, "","");
    updateField(5, "","");
}
function updateMessage(command) {
    let date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes(),
        isPM = false;
    if (hours > 12) {
        hours = hours - 12;
        isPM = true;
    } else if ((hours-12) == 0 && isPM == false) {
        hours = hours;
        isPM = true;
    } else if ((hours-12) == 0 && isPM == true) {
        hours = hours;
        isPM = false;
    }
    let time = hours + ':' + mins + " AM";
    if (isPM == true) time = hours + ':' + mins + " PM";
    console.log(time);

    switch (command) {
        case 'pageLoad':
            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Select a Button');
            updateElement('discord-embed-description', 'To see an example of the different features of this project, select a button to your left.');
            
            break;
        case 'grades':
            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Current Course Grades');
            updateElement('discord-embed-description', 'A list of grades and their associated courses.');
            updateField(0, 'Computer Systems: A', 'Computed Score: 100.0%');
            updateField(1, 'Growth and Grit First Year: B+', 'Computed Score: 87.97%');
            updateField(2, 'Introduction to Computing: A', 'Computed Score: 100.0%');
            updateField(3, 'Jesus Christ Evrlst Gospel: A', 'Computed Score: 97.92%');
            updateField(4, 'Technical Teamwork: A', 'Computed Score: 100.0%');
            updateField(5, 'U.S. History to 1877: B-', 'Computed Score: 82.5%');
            
            break;
        case 'help':
            let helpMSG = ['A list of commands and their valid arguments.<br>'];

            helpMSG.push('<code> <b>.help</b></code> <br> Displays this menu.');
            helpMSG.push('<code> <b>.settings</b></code> <br> Displays user settings.');
            helpMSG.push('<code> <b>.settings set [parameter] [value]</b></code> <br> modifies the specified settings parameter with the given value.');
            helpMSG.push('<code> <b>.settings set key</b></code> <br> Must be set to a valid 70-character long API access token.');
            helpMSG.push('<code> <b>.settings set color</b></code> <br> Must be set to a valid hex color (ex: 00ff00).');
            helpMSG.push('<code> <b>.settings set links</b></code> <br> Must be set to ether <code> <b>show</b></code> or <code> <b>hide</b></code>.');
            helpMSG.push('<code> <b>.settings set grades</b></code> <br> Must be set to ether <code> <b>show</b></code> or <code> <b>hide</b></code>.');
            helpMSG.push('<code> <b>.settings set history</b></code> <br> Must be set to a number between (2-14).');
            helpMSG.push('<code> <b>.grades</b></code> <br> Displays grades for currently enrolled classes. Only works if .settings > grades is set to "show".');
            helpMSG.push('<code> <b>.recentgrades</b></code> <br> Displays recent grades back a certain number of days, determined by .settings > history.');
            helpMSG.push('<code> <b>.upcoming</b></code> <br> Displays upcoming assignments for the next 7 days for currently enrolled classes.');
            helpMSG.push('<code> <b>.notifications</b></code> <br> Must be set to either <code> <b>on</b></code> or <code> <b>off</b></code>.');
            helpMSG.push('<code> <b>.dnd [optional_parameter]</b></code> <br> Toggles Do Not Disturb on or off -> optional_parameter = [on / off].');

            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Help');
            updateElement('discord-embed-description', helpMSG.join('<br>'));
            break;
        case 'recentgrades':
            let recentGradesMSG = ['A list grades recieved in the last <code>4</code> days.<br>'];

            recentGradesMSG.push('<b>Computer Systems | ECEN 106<br>Homework 11 (multiple attempts allowed)</b>');
            recentGradesMSG.push('<u>Grade: 10.0/10.0<br>Mean Score: 9.4</u><br>');
            recentGradesMSG.push('<b>Computer Systems | ECEN 106<br>Lab 3 Report</b>');
            recentGradesMSG.push('<u>Grade: 10.0/50.0<br>Mean Score: 17.5</u><br>');
            recentGradesMSG.push('<b>Growth & Grit First Year | GE 101<br>The Power of Grit and Grace - Ponder & Prove Journal</b>');
            recentGradesMSG.push('<u>Grade: Not Graded/10.0<br>Mean Score: None</u><br>');
            recentGradesMSG.push('<b>Growth & Grit First Year | GE 101<br>Week 6 - Attendance & Participation (For Instructors to Complete)</b>');
            recentGradesMSG.push('<u>Grade: 8.0/8.0<br>Mean Score: 7.4</u><br>');
            recentGradesMSG.push('<b>Jesus Christ Evrlst Gospel | REL 250C<br>12-Pre-Class Reading - The Gospels: Different Approaches, Same Message</b>');
            recentGradesMSG.push('<u>Grade: 5.0/5.0<br>Mean Score: 4.6</u><br>');
            recentGradesMSG.push('<b>U.S. History to 1877 | HIST 120<br>Pop Teaching #2</b>');
            recentGradesMSG.push('<u>Grade: 100.0/100.0<br>Mean Score: 74.6</u><br>');

            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Recently Graded Assignments');
            updateElement('discord-embed-description', recentGradesMSG.join('<br>'));
            break;
        case 'dueToday':
            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Assignments Due Today');
            updateElement('discord-embed-description', 'The following assignments are due today. Ensure you have enough time to complete them!');
            updateField(0, 'Computer Systems:', 'Final Project (Video)');
            updateField(1, 'Computer Systems:', 'Final Project (Report)');
            updateField(2, 'Growth and Grit First Year:', 'W13: Attendance');
            updateField(3, 'Jesus Christ Evrlst Gospel:', 'Pre-class reading: The Everlasting Covenant');
            updateField(4, 'Technical Teamwork:', 'Stand-up Meeting');
            updateField(5, 'U.S. History to 1877:', 'Final Exam');
            
            break;
        case 'upcomingAssignments':
            let upcomingMSG = ['A list of upcoming assignments in the next <code>7</code> days.<br>'];

            upcomingMSG.push('<b>Computer Systems | ECEN 106<br>Homework 11 (multiple attempts allowed)</b>');
            upcomingMSG.push('Due in 5 days.<br>');
            upcomingMSG.push('<b>Computer Systems | ECEN 106<br>Lab 3 Report</b>');
            upcomingMSG.push('Due in 5 days.<br>');
            upcomingMSG.push('<b>Growth & Grit First Year | GE 101<br>The Power of Grit and Grace - Ponder & Prove Journal</b>');
            upcomingMSG.push('Due in 6 days.<br>');
            upcomingMSG.push('<b>Growth & Grit First Year | GE 101<br>Week 6 - Attendance & Participation (For Instructors to Complete)</b>');
            upcomingMSG.push('Due in 6 days.<br>');
            upcomingMSG.push('<b>Jesus Christ Evrlst Gospel | REL 250C<br>12-Pre-Class Reading - The Gospels: Different Approaches, Same Message</b>');
            upcomingMSG.push('Due in 7 days.<br>');
            upcomingMSG.push('<b>U.S. History to 1877 | HIST 120<br>Pop Teaching #2</b>');
            upcomingMSG.push('Due in 7 days.<br>');

            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Recently Graded Assignments');
            updateElement('discord-embed-description', upcomingMSG.join('<br>'));
            break;
        case 'settings':
            messageInit(time, command);
            updateElement('discord-embed-title', 'Canvas LMS | Settings');
            updateElement('discord-embed-description', 'This message has not been configured yet. Please check back at a later time.');
            
            break;
    }
    console.log('Updated Discord Message!');
}
