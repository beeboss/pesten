function getSimpleTime() {
    var curTime = new Date();
    var hours = curTime.getHours();
    var minutes = curTime.getMinutes();
    return (hours + ":" + minutes);
}
