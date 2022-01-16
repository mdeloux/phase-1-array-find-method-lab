// code your solution here


function superbowlWin(object) {
    for (const record of object) {
        if (record.result === 'W') {
            return (record.year);
        }
    }
}

superbowlWin.find(year);

