function gettime() {
    const Year = now.getUTCFullYear();
    const Month = now.getUTCMonth()+1;
    // Dateだとエラーが出るためDatenowに変更
    const Datenow = now.getUTCDate();
    const Hour = now.getUTCHours();
    const Min = now.getUTCMinutes();
    const Sec = now.getUTCSeconds();
    // OP = OutPut
    const YearOP = Year.toString();
    const MonthOP = Month.toString();
    const DateOP = Datenow.toString();
    const HourOP = Hour.toString();
    const MinOP = Min.toString();
    const SecOP = Sec.toString();
    return YearOP + MonthOP + DateOP + HourOP + MinOP + SecOP;
}