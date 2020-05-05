import React, { Component } from 'react';

import jsPDF from 'jspdf';

export default class PdfGenerate extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
  
    // JSpdf Generator For generating the PDF
    jsPdfGenerator = () => {

        // Example From https://parall.ax/products/jspdf
        var doc = new jsPDF('p', 'pt');
        var line = 40;
        var SN = 'XXXXXXXX';
        var date = new Date();

        //Information
        for (var key in this.props.info){
            var title = key;
            var description = this.props.info[key];
            var text = key + ": " + description
            var splitText = doc.splitTextToSize(text, 520);
            doc.text(30,line,splitText);
            line = line + (20*splitText.length);
            if(title==='Machine Serial Number'){
                SN = description;
            }
        }

        //Data
        for (var key in this.props.log){
            var title = key;
            var description = this.props.log[key];
            var text = key + ": " + description
            var splitText = doc.splitTextToSize(text, 520);
            doc.text(30,line,splitText);
            line = line + (20*splitText.length);
        }
        
        /*
        doc.text(20, 20, 'This is the default font.')

        doc.setFont('courier')
        doc.setFontType('normal')
        doc.text(20, 30, 'This is courier normal.')

        doc.setFont('times')
        doc.setFontType('italic')
        doc.text(20, 40, 'This is times italic.')

        doc.setFont('helvetica')
        doc.setFontType('bold')
        doc.text(20, 50, 'This is helvetica bold.')

        doc.setFont('courier')
        doc.setFontType('bolditalic')
        doc.text(20, 60, 'This is courier bolditalic.')
        */
        
        // Save the Data

        var month = date.getMonth() + 1;
        if(month<10){
            month = '0' + month.toString();
        }else{
            month = month.toString();
        }
        var day = date.getDate();
        if(day<10){
            day = '0' + day.toString();
        }else{
            day = day.toString();
        }
        var hours = date.getHours();
        if(hours<10){
            hours = '0' + hours.toString();
        }else{
            hours = hours.toString();
        }
        var minutes = date.getMinutes();
        if(minutes<10){
            minutes = '0' + minutes.toString();
        }else{
            minutes = minutes.toString()
        }

        var docName = date.getFullYear().toString() + month + day + '_' + hours + minutes + '_' + SN + '.pdf'
        console.log(SN);

        doc.save(docName);
    }
  
    render(){
      return(
            <input type="button" id="pdfGenerator" onClick={this.jsPdfGenerator} value="Generate report"></input>
        )
    }
  
  
}