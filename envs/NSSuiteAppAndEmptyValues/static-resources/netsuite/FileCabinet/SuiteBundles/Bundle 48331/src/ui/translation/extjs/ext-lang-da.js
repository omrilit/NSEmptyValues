/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-11 22:33:40 (aed16176e68b5e8aa1433452b12805c0ad913836)
*/
/**
 * Danish translation
 * By JohnF
 * 04-09-2007, 05:28 AM
 *
 * Extended and modified by Karl Krukow,
 * December, 2007.
 */
Ext4.onReady(function() {
    var cm = Ext4.ClassManager,
        exists = Ext4.Function.bind(cm.get, cm);

    if (Ext4.Date) {
        Ext4.Date.monthNames = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];

        Ext4.Date.getShortMonthName = function(month) {
            return Ext4.Date.monthNames[month].substring(0, 3);
        };

        Ext4.Date.monthNumbers = {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            maj: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            okt: 9,
            nov: 10,
            dec: 11
        };

        Ext4.Date.getMonthNumber = function(name) {
            return Ext4.Date.monthNumbers[name.substring(0, 3).toLowerCase()];
        };

        Ext4.Date.dayNames = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];

        Ext4.Date.getShortDayName = function(day) {
            return Ext4.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext4.MessageBox) {
        Ext4.MessageBox.buttonText = {
            ok: "OK",
            cancel: "Fortryd",
            yes: "Ja",
            no: "Nej"
        };
    }

    if (exists('Ext4.util.Format')) {
        Ext4.apply(Ext4.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: 'kr',
            // Danish Krone
            dateFormat: 'd/m/Y'
        });
    }

    if (exists('Ext4.form.field.VTypes')) {
        Ext4.apply(Ext4.form.field.VTypes, {
            emailText: 'Dette felt skal være en email adresse i formatet "xxx@yyy.zzz"',
            urlText: 'Dette felt skal være en URL i formatet "http:/' + '/xxx.yyy"',
            alphaText: 'Dette felt kan kun indeholde bogstaver og "_" (understregning)',
            alphanumText: 'Dette felt kan kun indeholde bogstaver, tal og "_" (understregning)'
        });
    }
});

Ext4.define("Ext4.locale.da.view.View", {
    override: "Ext4.view.View",
    emptyText: ""
});

Ext4.define("Ext4.locale.da.grid.plugin.DragDrop", {
    override: "Ext4.grid.plugin.DragDrop",
    dragText: "{0} markerede rækker"
});

Ext4.define("Ext4.locale.da.TabPanelItem", {
    override: "Ext4.TabPanelItem",
    closeText: "Luk denne fane"
});

Ext4.define("Ext4.locale.da.form.field.Base", {
    override: "Ext4.form.field.Base",
    invalidText: "Værdien i dette felt er ugyldig"
});

// changing the msg text below will affect the LoadMask
Ext4.define("Ext4.locale.da.view.AbstractView", {
    override: "Ext4.view.AbstractView",
    msg: "Henter..."
});

Ext4.define("Ext4.locale.da.picker.Date", {
    override: "Ext4.picker.Date",
    todayText: "I dag",
    minText: "Denne dato er før den tidligst tilladte",
    maxText: "Denne dato er senere end den senest tilladte",
    disabledDaysText: "",
    disabledDatesText: "",
    monthNames: Ext4.Date.monthNames,
    dayNames: Ext4.Date.dayNames,
    nextText: 'Næste måned (Ctrl + højre piltast)',
    prevText: 'Forrige måned (Ctrl + venstre piltast)',
    monthYearText: 'Vælg en måned (Ctrl + op/ned pil for at ændre årstal)',
    todayTip: "{0} (mellemrum)",
    format: "d/m/y",
    startDay: 1
});

Ext4.define("Ext4.locale.da.picker.Month", {
    override: "Ext4.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Cancel"
});

Ext4.define("Ext4.locale.da.toolbar.Paging", {
    override: "Ext4.PagingToolbar",
    beforePageText: "Side",
    afterPageText: "af {0}",
    firstText: "Første side",
    prevText: "Forrige side",
    nextText: "Næste side",
    lastText: "Sidste side",
    refreshText: "Opfrisk",
    displayMsg: "Viser {0} - {1} af {2}",
    emptyMsg: 'Der er ingen data at vise'
});

Ext4.define("Ext4.locale.da.form.field.Text", {
    override: "Ext4.form.field.Text",
    minLengthText: "Minimum længden for dette felt er {0}",
    maxLengthText: "Maksimum længden for dette felt er {0}",
    blankText: "Dette felt skal udfyldes",
    regexText: "",
    emptyText: null
});

Ext4.define("Ext4.locale.da.form.field.Number", {
    override: "Ext4.form.field.Number",
    minText: "Mindste-værdien for dette felt er {0}",
    maxText: "Maksimum-værdien for dette felt er {0}",
    nanText: "{0} er ikke et tilladt nummer",
    decimalSeparator: ","
});

Ext4.define("Ext4.locale.da.form.field.Date", {
    override: "Ext4.form.field.Date",
    disabledDaysText: "Inaktiveret",
    disabledDatesText: "Inaktiveret",
    minText: "Datoen i dette felt skal være efter {0}",
    maxText: "Datoen i dette felt skal være før {0}",
    invalidText: "{0} er ikke en tilladt dato - datoer skal angives i formatet {1}",
    format: "d/m/y",
    altFormats: "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext4.define("Ext4.locale.da.form.field.ComboBox", {
    override: "Ext4.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext4.apply(Ext4.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Henter..."
    });
});

Ext4.define("Ext4.locale.da.form.field.HtmlEditor", {
    override: "Ext4.form.field.HtmlEditor",
    createLinkText: 'Indtast URL:'
}, function() {
    Ext4.apply(Ext4.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Fed (Ctrl+B)',
                //Can I change this to Ctrl+F?
                text: 'Formater det markerede tekst med fed.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Kursiv (Ctrl+I)',
                //Ctrl+K
                text: 'Formater det markerede tekst med kursiv.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Understreg (Ctrl+U)',
                text: 'Understreg det markerede tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Forstør tekst',
                text: 'Forøg fontstørrelsen.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Formindsk tekst',
                text: 'Formindsk fontstørrelsen.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Farve for tekstfremhævelse',
                text: 'Skift baggrundsfarve for det markerede tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Skriftfarve',
                text: 'Skift skriftfarve for det markerede tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Juster venstre',
                text: 'Venstrestil tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Centreret',
                text: 'Centrer tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Juster højre',
                text: 'Højrestil tekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Punktopstilling',
                text: 'Påbegynd punktopstilling.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Nummereret opstilling',
                text: 'Påbegynd nummereret opstilling.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hyperlink',
                text: 'Lav det markerede test til et hyperlink.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Kildetekstredigering',
                text: 'Skift til redigering af kildetekst.',
                cls: Ext4.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext4.define("Ext4.locale.da.grid.header.Container", {
    override: "Ext4.grid.header.Container",
    sortAscText: "Sortér stigende",
    sortDescText: "Sortér faldende",
    lockText: "Lås kolonne",
    unlockText: "Fjern lås fra kolonne",
    columnsText: "Kolonner"
});

Ext4.define("Ext4.locale.da.grid.GroupingFeature", {
    override: "Ext4.grid.GroupingFeature",
    emptyGroupText: '(Ingen)',
    groupByText: 'Gruppér efter dette felt',
    showGroupsText: 'Vis i grupper' //should this be sort in groups?
});

Ext4.define("Ext4.locale.da.grid.PropertyColumnModel", {
    override: "Ext4.grid.PropertyColumnModel",
    nameText: "Navn",
    valueText: "Værdi",
    dateFormat: "j/m/Y"
});

// This is needed until we can refactor all of the locales into individual files
Ext4.define("Ext4.locale.da.Component", {	
    override: "Ext4.Component"
});

