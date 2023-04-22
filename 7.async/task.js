class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === undefined || callback === undefined) {
          throw new Error('Отсутствуют обязательные аргументы');
        }
    
        if (this.alarmCollection.some(element => element.time === time)) {
            return console.warn("Уже присутствует звонок на это же время");
        } 
        
        this.alarmCollection.push ({callback, time, canCall: true});
    }

    removeClock (time){
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
          return currentDate;
    }
}