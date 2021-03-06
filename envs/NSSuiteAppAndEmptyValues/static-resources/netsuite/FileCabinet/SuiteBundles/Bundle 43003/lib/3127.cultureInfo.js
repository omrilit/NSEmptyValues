/*
Datejs MIT License
Copyright (c) 2006-2010, Coolite Inc. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

* Version: 1.0 Alpha-1 
* Build Date: 13-Nov-2007
* Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
*/

Date.CultureInfo_en = {
	/* Culture Name */
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    
    /* Day Name Strings */
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    
    /* Month Name Strings */
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

	/* AM/PM Designators */
    amDesignator: "AM",
    pmDesignator: "PM",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,

    dateElementOrder: "mdy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },

    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }   
};

Date.CultureInfo_es = {
	/* Culture Name */
    name: "es-ES",
    englishName: "Spanish (Spain)",
    nativeName: "espa??ol (Espa??a)",
    
    /* Day Name Strings */
    dayNames: ["Domingo", "Lunes", "Martes", "Mi??rcoles", "Jueves", "Viernes", "S??bado"],
    abbreviatedDayNames: ["Dom", "Lun", "Mar", "Mi??", "Jue", "Vie", "S??b"],
    shortestDayNames: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "S??"],
    firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"],
    
    /* Month Name Strings */
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    abbreviatedMonthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
  
    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd, dd' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM' de 'yyyy"
    },

    regexPatterns: {
        jan: /^ene(ro)?/i,
        feb: /^feb(rero)?/i,
        mar: /^mar(zo)?/i,
        apr: /^abr(il)?/i,
        may: /^may(o)?/i,
        jun: /^jun(io)?/i,
        jul: /^jul(io)?/i,
        aug: /^ago(sto)?/i,
        sep: /^sep(tiembre)?/i,
        oct: /^oct(ubre)?/i,
        nov: /^nov(iembre)?/i,
        dec: /^dic(iembre)?/i,

        sun: /^do(m(ingo)?)?/i,
        mon: /^lu(n(es)?)?/i,
        tue: /^ma(r(tes)?)?/i,
        wed: /^mi(??(rcoles)?)?/i,
        thu: /^ju(e(ves)?)?/i,
        fri: /^vi(e(rnes)?)?/i,
        sat: /^s??(b(ado)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_pt =  {
	/* Culture Name */
    name: "pt-PT",
    englishName: "Portuguese (Portugal)",
    nativeName: "portugu??s (Portugal)",
    
    /* Day Name Strings */
    dayNames: ["Domingo", "Segunda-feira", "Ter??a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S??bado"],
    abbreviatedDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S??b"],
    shortestDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S??b"],
    firstLetterDayNames: ["D", "S", "T", "Q", "Q", "S", "S"],
    
    /* Month Name Strings */
    monthNames: ["Janeiro", "Fevereiro", "Mar??o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    abbreviatedMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
  
    dateElementOrder: "dmy",
    
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "dddd, d' de 'MMMM' de 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd, d' de 'MMMM' de 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d/M",
        yearMonth: "MMMM' de 'yyyy"
    },

    regexPatterns: {
        jan: /^jan(eiro)?/i,
        feb: /^fev(ereiro)?/i,
        mar: /^mar(??o)?/i,
        apr: /^abr(il)?/i,
        may: /^mai(o)?/i,
        jun: /^jun(ho)?/i,
        jul: /^jul(ho)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(embro)?/i,
        oct: /^out(ubro)?/i,
        nov: /^nov(embro)?/i,
        dec: /^dez(embro)?/i,

        sun: /^domingo/i,
        mon: /^segunda-feira/i,
        tue: /^ter??a-feira/i,
        wed: /^quarta-feira/i,
        thu: /^quinta-feira/i,
        fri: /^sexta-feira/i,
        sat: /^s??bado/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }   
};

Date.CultureInfo_fr = {
	/* Culture Name */
    name: "fr-FR",
    englishName: "French (France)",
    nativeName: "fran??ais (France)",
    
    /* Day Name Strings */
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    abbreviatedDayNames: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    shortestDayNames: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
    firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"],
    
    /* Month Name Strings */
    monthNames: ["Janvier", "F??vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao??t", "Septembre", "Octobre", "Novembre", "D??cembre"],
    abbreviatedMonthNames: ["Janv.", "F??vr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Ao??t", "Sept.", "Oct.", "Nov.", "D??c."],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "dmy",
    
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^janv(.(ier)?)?/i,
        feb: /^f??vr(.(ier)?)?/i,
        mar: /^mars/i,
        apr: /^avr(.(il)?)?/i,
        may: /^mai/i,
        jun: /^juin/i,
        jul: /^juil(.(let)?)?/i,
        aug: /^ao??t/i,
        sep: /^sept(.(embre)?)?/i,
        oct: /^oct(.(obre)?)?/i,
        nov: /^nov(.(embre)?)?/i,
        dec: /^d??c(.(embre)?)?/i,

        sun: /^di(m(.(anche)?)?)?/i,
        mon: /^lu(n(.(di)?)?)?/i,
        tue: /^ma(r(.(di)?)?)?/i,
        wed: /^me(r(.(credi)?)?)?/i,
        thu: /^je(u(.(di)?)?)?/i,
        fri: /^ve(n(.(dredi)?)?)?/i,
        sat: /^sa(m(.(edi)?)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_de = {
	/* Culture Name */
    name: "de-DE",
    englishName: "German (Germany)",
    nativeName: "Deutsch (Deutschland)",
    
    /* Day Name Strings */
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    abbreviatedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    shortestDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "D", "M", "D", "F", "S"],
    
    /* Month Name Strings */
    monthNames: ["Januar", "Februar", "M??rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "dddd, d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dddd, d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^m??rz/i,
        apr: /^apr(il)?/i,
        may: /^mai/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dez(ember)?/i,

        sun: /^sonntag/i,
        mon: /^montag/i,
        tue: /^dienstag/i,
        wed: /^mittwoch/i,
        thu: /^donnerstag/i,
        fri: /^freitag/i,
        sat: /^samstag/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
};

Date.CultureInfo_du = {
	/* Culture Name */
    name: "nl-NL",
    englishName: "Dutch (Netherlands)",
    nativeName: "Nederlands (Nederland)",
    
    /* Day Name Strings */
    dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
    abbreviatedDayNames: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
    shortestDayNames: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
    firstLetterDayNames: ["Z", "M", "D", "W", "D", "V", "Z"],
    
    /* Month Name Strings */
    monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d-M-yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "dddd d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^maart/i,
        apr: /^apr(il)?/i,
        may: /^mei/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ustus)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^zondag/i,
        mon: /^maandag/i,
        tue: /^dinsdag/i,
        wed: /^woensdag/i,
        thu: /^donderdag/i,
        fri: /^vrijdag/i,
        sat: /^zaterdag/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }  
};

Date.CultureInfo_da = {
	/* Culture Name */
    name: "da-DK",
    englishName: "Danish (Denmark)",
    nativeName: "dansk (Danmark)",
    
    /* Day Name Strings */
    dayNames: ["S??ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L??rdag"],
    abbreviatedDayNames: ["S??", "Ma", "Ti", "On", "To", "Fr", "L??"],
    shortestDayNames: ["S??", "Ma", "Ti", "On", "To", "Fr", "L??"],
    firstLetterDayNames: ["S", "M", "T", "O", "T", "F", "L"],
    
    /* Month Name Strings */
    monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd-MM-yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d. MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(ts)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^s??ndag/i,
        mon: /^mandag/i,
        tue: /^tirsdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^l??rdag/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
};

Date.CultureInfo_ro = {
	/* Culture Name */
    name: "ro-RO",
    englishName: "Romanian (Romania)",
    nativeName: "rom??n?? (Rom??nia)",
    
    /* Day Name Strings */
    dayNames: ["Duminic??", "Luni", "Mar??i", "Miercuri", "Joi", "Vineri", "S??mb??t??"],
    abbreviatedDayNames: ["D", "L", "Ma", "Mi", "J", "V", "S"],
    shortestDayNames: ["D", "L", "Ma", "Mi", "J", "V", "S"],
    firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"],
    
    /* Month Name Strings */
    monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    abbreviatedMonthNames: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai.", "Iun.", "Iul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd.MM.yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^ian(.(uarie)?)?/i,
        feb: /^feb(.(ruarie)?)?/i,
        mar: /^mar(.(tie)?)?/i,
        apr: /^apr(.(ilie)?)?/i,
        may: /^mai(.()?)?/i,
        jun: /^iun(.(ie)?)?/i,
        jul: /^iul(.(ie)?)?/i,
        aug: /^aug(.(ust)?)?/i,
        sep: /^sep(.(tembrie)?)?/i,
        oct: /^oct(.(ombrie)?)?/i,
        nov: /^noiembrie/i,
        dec: /^dec(.(embrie)?)?/i,

        sun: /^duminic??/i,
        mon: /^luni/i,
        tue: /^mar??i/i,
        wed: /^miercuri/i,
        thu: /^joi/i,
        fri: /^vineri/i,
        sat: /^s??mb??t??/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_bg = {
	/* Culture Name */
    name: "bg-BG",
    englishName: "Bulgarian (Bulgaria)",
    nativeName: "?????????????????? (????????????????)",
    
    /* Day Name Strings */
    dayNames: ["????????????", "????????????????????", "??????????????", "??????????", "??????????????????", "??????????", "????????????"],
    abbreviatedDayNames: ["????", "????", "????", "????", "????", "????", "????"],
    shortestDayNames: ["????", "????", "????", "????", "????", "????", "????"],
    firstLetterDayNames: ["??", "??", "??", "??", "??", "??", "??"],
    
    /* Month Name Strings */
    monthNames: ["????????????", "????????????????", "????????", "??????????", "??????", "??????", "??????", "????????????", "??????????????????", "????????????????", "??????????????", "????????????????"],
    abbreviatedMonthNames: ["????????????", "????????????????", "????????", "??????????", "??????", "??????", "??????", "????????????", "??????????????????", "????????????????", "??????????????", "????????????????"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd.M.yyyy '??.'",
        longDate: "dd MMMM yyyy '??.'",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "dd MMMM yyyy '??.' HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy '??.'"
    },

    regexPatterns: {
        jan: /^????????????/i,
        feb: /^????????????????/i,
        mar: /^????????/i,
        apr: /^??????????/i,
        may: /^??????/i,
        jun: /^??????/i,
        jul: /^??????/i,
        aug: /^????????????/i,
        sep: /^??????????????????/i,
        oct: /^????????????????/i,
        nov: /^??????????????/i,
        dec: /^????????????????/i,

        sun: /^????((????????)?)?/i,
        mon: /^????((????????????????)?)?/i,
        tue: /^??????????????/i,
        wed: /^??????????/i,
        thu: /^????((??????????????)?)?/i,
        fri: /^????((??????)?)?/i,
        sat: /^????((????????)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_zh = {
	/* Culture Name */
    name: "zh-TW",
    englishName: "Chinese (Taiwan)",
    nativeName: "??????(??????)",
    
    /* Day Name Strings */
    dayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    abbreviatedDayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    shortestDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    firstLetterDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    
    /* Month Name Strings */
    monthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
    abbreviatedMonthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],

	/* AM/PM Designators */
    amDesignator: "??????",
    pmDesignator: "??????",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,

    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy/M/d",
        longDate: "yyyy'???'M'???'d'???'",
        shortTime: "tt hh:mm",
        longTime: "tt hh:mm:ss",
        fullDateTime: "yyyy'???'M'???'d'???' tt hh:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'???'d'???'",
        yearMonth: "yyyy'???'M'???'"
    },
	
    regexPatterns: {
        jan: /^??????/i,
        feb: /^??????/i,
        mar: /^??????/i,
        apr: /^??????/i,
        may: /^??????/i,
        jun: /^??????/i,
        jul: /^??????/i,
        aug: /^??????/i,
        sep: /^??????/i,
        oct: /^??????/i,
        nov: /^?????????/i,
        dec: /^?????????/i,

        sun: /^?????????/i,
        mon: /^?????????/i,
        tue: /^?????????/i,
        wed: /^?????????/i,
        thu: /^?????????/i,
        fri: /^?????????/i,
        sat: /^?????????/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_cn = {
	/* Culture Name */
    name: "zh-CN",
    englishName: "Chinese (People's Republic of China)",
    nativeName: "??????(?????????????????????)",
    
    /* Day Name Strings */
    dayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    abbreviatedDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    shortestDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    firstLetterDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    
    /* Month Name Strings */
    monthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
    abbreviatedMonthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],

	/* AM/PM Designators */
    amDesignator: "??????",
    pmDesignator: "??????",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy/M/d",
        longDate: "yyyy'???'M'???'d'???'",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "yyyy'???'M'???'d'???' H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'???'d'???'",
        yearMonth: "yyyy'???'M'???'"
    },

    regexPatterns: {
        jan: /^??????/i,
        feb: /^??????/i,
        mar: /^??????/i,
        apr: /^??????/i,
        may: /^??????/i,
        jun: /^??????/i,
        jul: /^??????/i,
        aug: /^??????/i,
        sep: /^??????/i,
        oct: /^??????/i,
        nov: /^?????????/i,
        dec: /^?????????/i,

        sun: /^?????????/i,
        mon: /^?????????/i,
        tue: /^?????????/i,
        wed: /^?????????/i,
        thu: /^?????????/i,
        fri: /^?????????/i,
        sat: /^?????????/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_cs = {
	/* Culture Name */
    name: "cs-CZ",
    englishName: "Czech (Czech Republic)",
    nativeName: "??e??tina (??esk????republika)",
    
    /* Day Name Strings */
    dayNames: ["ned??le", "pond??l??", "??ter??", "st??eda", "??tvrtek", "p??tek", "sobota"],
    abbreviatedDayNames: ["ne", "po", "??t", "st", "??t", "p??", "so"],
    shortestDayNames: ["ne", "po", "??t", "st", "??t", "p??", "so"],
    firstLetterDayNames: ["n", "p", "??", "s", "??", "p", "s"],
    
    /* Month Name Strings */
    monthNames: ["Leden", "??nor", "B??ezen", "Duben", "Kv??ten", "??erven", "??ervenec", "Srpen", "Z??????", "????jen", "Listopad", "Prosinec"],
    abbreviatedMonthNames: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],

	/* AM/PM Designators */
    amDesignator: "dop.",
    pmDesignator: "odp.",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^leden/i,
        feb: /^??nor/i,
        mar: /^b??ezen/i,
        apr: /^duben/i,
        may: /^kv??ten/i,
        jun: /^??erven/i,
        jul: /^??ervenec/i,
        aug: /^srpen/i,
        sep: /^z??????/i,
        oct: /^????jen/i,
        nov: /^listopad/i,
        dec: /^prosinec/i,

        sun: /^ned??le/i,
        mon: /^pond??l??/i,
        tue: /^??ter??/i,
        wed: /^st??eda/i,
        thu: /^??tvrtek/i,
        fri: /^p??tek/i,
        sat: /^sobota/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_sv = {
	/* Culture Name */
    name: "sv-SE",
    englishName: "Swedish (Sweden)",
    nativeName: "svenska (Sverige)",
    
    /* Day Name Strings */
    dayNames: ["s??ndag", "m??ndag", "tisdag", "onsdag", "torsdag", "fredag", "l??rdag"],
    abbreviatedDayNames: ["s??", "m??", "ti", "on", "to", "fr", "l??"],
    shortestDayNames: ["s??", "m??", "ti", "on", "to", "fr", "l??"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    
    /* Month Name Strings */
    monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "'den 'd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "'den 'd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "'den 'd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(usti)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^s??ndag/i,
        mon: /^m??ndag/i,
        tue: /^tisdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^l??rdag/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_th = {
	/* Culture Name */
    name: "th-TH",
    englishName: "Thai (Thailand)",
    nativeName: "????????? (?????????)",
    
    /* Day Name Strings */
    dayNames: ["?????????????????????", "??????????????????", "??????????????????", "?????????", "????????????????????????", "???????????????", "???????????????"],
    abbreviatedDayNames: ["??????.", "???.", "???.", "???.", "??????.", "???.", "???."],
    shortestDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    firstLetterDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    
    /* Month Name Strings */
    monthNames: ["??????????????????", "??????????????????????????????", "??????????????????", "??????????????????", "?????????????????????", "????????????????????????", "?????????????????????", "?????????????????????", "?????????????????????", "??????????????????", "???????????????????????????", "?????????????????????"],
    abbreviatedMonthNames: ["???.???.", "???.???.", "??????.???.", "??????.???.", "???.???.", "??????.???.", "???.???.", "???.???.", "???.???.", "???.???.", "???.???.", "???.???."],

	/* AM/PM Designators */
    amDesignator: "AM",
    pmDesignator: "PM",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2572,
 
    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "d MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^???(.(????????????)?)?/i,
        feb: /^???(.(???????????????????????????)?)?/i,
        mar: /^??????(.(????????????)?)?/i,
        apr: /^??????(.(????????????)?)?/i,
        may: /^???(.(??????????????????)?)?/i,
        jun: /^??????(.(??????????????????)?)?/i,
        jul: /^???(.(???????????????)?)?/i,
        aug: /^???(.(??????????????????)?)?/i,
        sep: /^???(.(??????????????????)?)?/i,
        oct: /^???(.(???????????????)?)?/i,
        nov: /^???(.(????????????????????????)?)?/i,
        dec: /^???(.(??????????????????)?)?/i,

        sun: /^???(???(.(???????????????)?)?)?/i,
        mon: /^???((.(???????????????)?)?)?/i,
        tue: /^???((.(???????????????)?)?)?/i,
        wed: /^???((.(??????)?)?)?/i,
        thu: /^???(???(.(??????????????????)?)?)?/i,
        fri: /^???((.(????????????)?)?)?/i,
        sat: /^???((.(????????????)?)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_sr = {
	/* Culture Name */
    name: "sr-Cyrl-CS",
    englishName: "Serbian (Cyrillic, Serbia)",
    nativeName: "???????????? (????????????)",
    
    /* Day Name Strings */
    dayNames: ["????????????", "??????????????????", "????????????", "??????????", "????????????????", "??????????", "????????????"],
    abbreviatedDayNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
    shortestDayNames: ["????", "????", "????", "????", "????", "????", "????"],
    firstLetterDayNames: ["??", "??", "??", "??", "??", "??", "??"],
    
    /* Month Name Strings */
    monthNames: ["????????????", "??????????????", "????????", "??????????", "??????", "??????", "??????", "????????????", "??????????????????", "??????????????", "????????????????", "????????????????"],
    abbreviatedMonthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^??????(??????)?/i,
        feb: /^??????(????????)?/i,
        mar: /^??????(??)?/i,
        apr: /^??????(????)?/i,
        may: /^??????/i,
        jun: /^??????/i,
        jul: /^??????/i,
        aug: /^??????(??????)?/i,
        sep: /^??????(????????????)?/i,
        oct: /^??????(????????)?/i,
        nov: /^??????(??????????)?/i,
        dec: /^??????(??????????)?/i,

        sun: /^????(??(??????)?)?/i,
        mon: /^????(??(????????????)?)?/i,
        tue: /^????(??(??????)?)?/i,
        wed: /^????(??(????)?)?/i,
        thu: /^????(??(??????????)?)?/i,
        fri: /^????(??(????)?)?/i,
        sat: /^????(??(??????)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_sl = {
	/* Culture Name */
    name: "sl-SI",
    englishName: "Slovenian (Slovenia)",
    nativeName: "slovenski (Slovenija)",
    
    /* Day Name Strings */
    dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Cetrtek", "Petek", "Sobota"],
    abbreviatedDayNames: ["Ned", "Pon", "Tor", "Sre", "Cet", "Pet", "Sob"],
    shortestDayNames: ["Ne", "Po", "To", "Sr", "Ce", "Pe", "So"],
    firstLetterDayNames: ["N", "P", "T", "S", "C", "S", "S"],
    
    /* Month Name Strings */
    monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uar)?/i,
        feb: /^feb(ruar)?/i,
        mar: /^mar(ec)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(ij)?/i,
        jul: /^jul(ij)?/i,
        aug: /^avg(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^ne(d(elja)?)?/i,
        mon: /^po(n(edeljek)?)?/i,
        tue: /^to(r(ek)?)?/i,
        wed: /^sr(e(da)?)?/i,
        thu: /^ce(t(rtek)?)?/i,
        fri: /^pe(t(ek)?)?/i,
        sat: /^so(b(ota)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_pl = {
	/* Culture Name */
    name: "pl-PL",
    englishName: "Polish (Poland)",
    nativeName: "polski (Polska)",
    
    /* Day Name Strings */
    dayNames: ["niedziela", "poniedzia??ek", "wtorek", "??roda", "czwartek", "pi??tek", "sobota"],
    abbreviatedDayNames: ["N", "Pn", "Wt", "??r", "Cz", "Pt", "So"],
    shortestDayNames: ["N", "Pn", "Wt", "??r", "Cz", "Pt", "So"],
    firstLetterDayNames: ["N", "P", "W", "??", "C", "P", "S"],
    
    /* Month Name Strings */
    monthNames: ["Stycze??", "Luty", "Marzec", "Kwiecie??", "Maj", "Czerwiec", "Lipiec", "Sierpie??", "Wrzesie??", "Pa??dziernik", "Listopad", "Grudzie??"],
    abbreviatedMonthNames: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa??", "lis", "gru"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "d MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "d MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^sty(cze??)?/i,
        feb: /^lut(y)?/i,
        mar: /^mar(zec)?/i,
        apr: /^kwi(ecie??)?/i,
        may: /^maj/i,
        jun: /^cze(rwiec)?/i,
        jul: /^lip(iec)?/i,
        aug: /^sie(rpie??)?/i,
        sep: /^wrz(esie??)?/i,
        oct: /^pa??(dziernik)?/i,
        nov: /^lis(topad)?/i,
        dec: /^gru(dzie??)?/i,

        sun: /^niedziela/i,
        mon: /^poniedzia??ek/i,
        tue: /^wtorek/i,
        wed: /^??roda/i,
        thu: /^czwartek/i,
        fri: /^pi??tek/i,
        sat: /^sobota/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_kr = {
	/* Culture Name */
    name: "ko-KR",
    englishName: "Korean (Korea)",
    nativeName: "????????? (????????????)",
    
    /* Day Name Strings */
    dayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    abbreviatedDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    shortestDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    firstLetterDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    
    /* Month Name Strings */
    monthNames: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
    abbreviatedMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

	/* AM/PM Designators */
    amDesignator: "??????",
    pmDesignator: "??????",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,

    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "yyyy'???' M'???' d'???' dddd",
        shortTime: "tt h:mm",
        longTime: "tt h:mm:ss",
        fullDateTime: "yyyy'???' M'???' d'???' dddd tt h:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'???' d'???'",
        yearMonth: "yyyy'???' M'???'"
    },

    regexPatterns: {
        jan: /^1(???)?/i,
        feb: /^2(???)?/i,
        mar: /^3(???)?/i,
        apr: /^4(???)?/i,
        may: /^5(???)?/i,
        jun: /^6(???)?/i,
        jul: /^7(???)?/i,
        aug: /^8(???)?/i,
        sep: /^9(???)?/i,
        oct: /^10(???)?/i,
        nov: /^11(???)?/i,
        dec: /^12(???)?/i,

        sun: /^?????????/i,
        mon: /^?????????/i,
        tue: /^?????????/i,
        wed: /^?????????/i,
        thu: /^?????????/i,
        fri: /^?????????/i,
        sat: /^?????????/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_el = {
	/* Culture Name */
    name: "el-GR",
    englishName: "Greek (Greece)",
    nativeName: "???????????????? (????????????)",
    
    /* Day Name Strings */
    dayNames: ["??????????????", "??????????????", "??????????", "??????????????", "????????????", "??????????????????", "??????????????"],
    abbreviatedDayNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????"],
    shortestDayNames: ["????", "????", "????", "????", "????", "????", "????"],
    firstLetterDayNames: ["??", "??", "??", "??", "??", "??", "??"],
    
    /* Month Name Strings */
    monthNames: ["????????????????????", "??????????????????????", "??????????????", "????????????????", "??????????", "??????????????", "??????????????", "??????????????????", "??????????????????????", "??????????????????", "??????????????????", "????????????????????"],
    abbreviatedMonthNames: ["??????", "??????", "??????", "??????", "??????", "????????", "????????", "??????", "??????", "??????", "??????", "??????"],

	/* AM/PM Designators */
    amDesignator: "????",
    pmDesignator: "????",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d/M/yyyy",
        longDate: "dddd, d MMMM yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, d MMMM yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^??????(??????????????)?/i,
        feb: /^??????(????????????????)?/i,
        mar: /^??????????????/i,
        apr: /^??????(??????????)?/i,
        may: /^??????????/i,
        jun: /^??????????????/i,
        jul: /^??????????????/i,
        aug: /^??????????????????/i,
        sep: /^??????(????????????????)?/i,
        oct: /^??????(????????????)?/i,
        nov: /^??????????????????/i,
        dec: /^??????(??????????????)?/i,

        sun: /^????(??(????????)?)?/i,
        mon: /^????(??(????????)?)?/i,
        tue: /^????(??(????)?)?/i,
        wed: /^????(??(????????)?)?/i,
        thu: /^????(??(??????)?)?/i,
        fri: /^????(??(????????????)?)?/i,
        sat: /^????(??(????????)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_it = {
	/* Culture Name */
    name: "it-IT",
    englishName: "Italian (Italy)",
    nativeName: "italiano (Italia)",
    
    /* Day Name Strings */
     dayNames: ["domenica", "luned??", "marted??", "mercoled??", "gioved??", "venerd??", "sabato"],
    abbreviatedDayNames: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    shortestDayNames: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
    firstLetterDayNames: ["d", "l", "m", "m", "g", "v", "s"],
    
    /* Month Name Strings */
    monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    abbreviatedMonthNames: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "dd/MM/yyyy",
        longDate: "dddd d MMMM yyyy",
        shortTime: "H.mm",
        longTime: "H.mm.ss",
        fullDateTime: "dddd d MMMM yyyy H.mm.ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "dd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^gen(naio)?/i,
        feb: /^feb(braio)?/i,
        mar: /^mar(zo)?/i,
        apr: /^apr(ile)?/i,
        may: /^mag(gio)?/i,
        jun: /^giu(gno)?/i,
        jul: /^lug(lio)?/i,
        aug: /^ago(sto)?/i,
        sep: /^set(tembre)?/i,
        oct: /^ott(obre)?/i,
        nov: /^nov(embre)?/i,
        dec: /^dic(embre)?/i,

        sun: /^do(m(enica)?)?/i,
        mon: /^lu(n(ed??)?)?/i,
        tue: /^ma(r(ted??)?)?/i,
        wed: /^me(r(coled??)?)?/i,
        thu: /^gi(o(ved??)?)?/i,
        fri: /^ve(n(erd??)?)?/i,
        sat: /^sa(b(ato)?)?/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_sv = {
	/* Culture Name */
    name: "sv-SE",
    englishName: "Swedish (Sweden)",
    nativeName: "svenska (Sverige)",
    
  /* Day Name Strings */
    dayNames: ["s??ndag", "m??ndag", "tisdag", "onsdag", "torsdag", "fredag", "l??rdag"],
    abbreviatedDayNames: ["s??", "m??", "ti", "on", "to", "fr", "l??"],
    shortestDayNames: ["s??", "m??", "ti", "on", "to", "fr", "l??"],
    firstLetterDayNames: ["s", "m", "t", "o", "t", "f", "l"],
    
    /* Month Name Strings */
    monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    abbreviatedMonthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,
    
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy-MM-dd",
        longDate: "'den 'd MMMM yyyy",
        shortTime: "HH:mm",
        longTime: "HH:mm:ss",
        fullDateTime: "'den 'd MMMM yyyy HH:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "'den 'd MMMM",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^jan(uari)?/i,
        feb: /^feb(ruari)?/i,
        mar: /^mar(s)?/i,
        apr: /^apr(il)?/i,
        may: /^maj/i,
        jun: /^jun(i)?/i,
        jul: /^jul(i)?/i,
        aug: /^aug(usti)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^okt(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,

        sun: /^s??ndag/i,
        mon: /^m??ndag/i,
        tue: /^tisdag/i,
        wed: /^onsdag/i,
        thu: /^torsdag/i,
        fri: /^fredag/i,
        sat: /^l??rdag/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_zh_tw = {
	/* Culture Name */
    name: "zh-TW",
    englishName: "Chinese (Taiwan)",
    nativeName: "??????(??????)",
    
    /* Day Name Strings */
    dayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    abbreviatedDayNames: ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"],
    shortestDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    firstLetterDayNames: ["???", "???", "???", "???", "???", "???", "???"],
    
    /* Month Name Strings */
    monthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],
    abbreviatedMonthNames: ["??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "??????", "?????????", "?????????"],

	/* AM/PM Designators */
    amDesignator: "??????",
    pmDesignator: "??????",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
 
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy/M/d",
        longDate: "yyyy'???'M'???'d'???'",
        shortTime: "tt hh:mm",
        longTime: "tt hh:mm:ss",
        fullDateTime: "yyyy'???'M'???'d'???' tt hh:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "M'???'d'???'",
        yearMonth: "yyyy'???'M'???'"
    },

    regexPatterns: {
        jan: /^??????/i,
        feb: /^??????/i,
        mar: /^??????/i,
        apr: /^??????/i,
        may: /^??????/i,
        jun: /^??????/i,
        jul: /^??????/i,
        aug: /^??????/i,
        sep: /^??????/i,
        oct: /^??????/i,
        nov: /^?????????/i,
        dec: /^?????????/i,

        sun: /^?????????/i,
        mon: /^?????????/i,
        tue: /^?????????/i,
        wed: /^?????????/i,
        thu: /^?????????/i,
        fri: /^?????????/i,
        sat: /^?????????/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};

Date.CultureInfo_fi = {
	/* Culture Name */
    name: "fi-FI",
    englishName: "Finnish (Finland)",
    nativeName: "suomi (Suomi)",
    
    /* Day Name Strings */
    dayNames: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    abbreviatedDayNames: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    shortestDayNames: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    firstLetterDayNames: ["s", "m", "t", "k", "t", "p", "l"],
    
    /* Month Name Strings */
    monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes??kuu", "Hein??kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
    abbreviatedMonthNames: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kes??", "Hein??", "Elo", "Syys", "Loka", "Marras", "Joulu"],

	/* AM/PM Designators */
    amDesignator: "",
    pmDesignator: "",

    firstDayOfWeek: 1,
    twoDigitYearMax: 2029,

    dateElementOrder: "dmy",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "d.M.yyyy",
        longDate: "d. MMMM'ta 'yyyy",
        shortTime: "H:mm",
        longTime: "H:mm:ss",
        fullDateTime: "d. MMMM'ta 'yyyy H:mm:ss",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "d. MMMM'ta'",
        yearMonth: "MMMM yyyy"
    },

    regexPatterns: {
        jan: /^tammi(kuu)?/i,
        feb: /^helmi(kuu)?/i,
        mar: /^maalis(kuu)?/i,
        apr: /^huhti(kuu)?/i,
        may: /^touko(kuu)?/i,
        jun: /^kes??(kuu)?/i,
        jul: /^hein??(kuu)?/i,
        aug: /^elo(kuu)?/i,
        sep: /^syys(kuu)?/i,
        oct: /^loka(kuu)?/i,
        nov: /^marras(kuu)?/i,
        dec: /^joulu(kuu)?/i,

        sun: /^sunnuntai/i,
        mon: /^maanantai/i,
        tue: /^tiistai/i,
        wed: /^keskiviikko/i,
        thu: /^torstai/i,
        fri: /^perjantai/i,
        sat: /^lauantai/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" },
    abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" }
    
};