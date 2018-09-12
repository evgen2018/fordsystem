function rand_num(min,max) {
	var number = min + Math.floor(Math.random() * max);
	return number;
}
function numberCom(val) {
	while (/(\d+)(\d{3})/.test(val.toString())) val = val.toString().replace(/(\d+)(\d{3})/, "$1"+","+"$2");
	return val;
}
  var names = new Array("Harvey","Christopher","David","Morgan","Jason","Travis","Charlie","Robert","Henry","Kieran","Charles","Joseph","Ellis","Billy","Andrew","Johnny","George","Sebastian","Cameron","Tory","Joel","Adam","Bryce","Dwayne","Vincent","Leon","Aidan","Aidan","David","Jacob","Ben","Alex","Enrique","Dennis","Nathan","Charles","Robert","Alfie","Dominic","Leon","John","Daniel","Charles","Romeo","Noah","Anthony","James","Mohammed","Louis","Joseph","Ellis","Kai","Jay","Noah","Lewis","Anthony","Jamie","Elliot","Ronald","Troy","Reece","Richard","Joel","Callum","Jack","Richard","Nicholas","Cameron","Harry","William","Lyle","Frank","Norman","Anthony","Morgan","Geoffrey","Alejandro","Zak","Anthony","Kieran","Ross","Paul","Sam","Richard","Michael","Roger","Charles","Reece","Brandon","Robert","Luca","Harrison","Ryan","Taylor","Frank","Larry","Billy","Sam","Finlay","Zara","Georgia","Sylvie","Kiera","Margaret","Patria","Ava","Diane","Skye","Helen","Jennifer","Isabella","Faith","Jessica","Penny","Rebecca","Summer","Tamara","Tamika","Magdalene","Wendy","Genevieve","Stephanie","Erin","Abby","Ann","Abbie","Leigh","Shanna","Tilly","Laura","Mary","Paula","Isabel","Ella","Tatiana","Mary","Tegan","Cynthia","Abigail","Lauren","Laura","Katherine","Naomi","Barbara","Melisa","Pamela","Leeann","Jodie","Terri","Caitlin","Roberta","Daisy","Molly","Frieda","Louise","Elizabeth","Stella","Billie","Gracie","Sienna","Katie","Mildred","Kayleigh","Christy","Kiera","Yun","Courtney","Tegan","Sheila","Ray","Lydia","Mamie","Keira","Matilda","Sonya","Ava","Cerys","Eleanor","Grace","Jodie","Sharon","Elva","Eleanor","Freya","Bessie","Sofia","Amelie","Brenda","Poppy","Tegan","Sienna","Leah","Antoinette","Zoe");
var images = [

'img/ftimages/1.jpg',  'img/ftimages/2.jpg',  'img/ftimages/3.jpg',  'img/ftimages/4.jpg',  'img/ftimages/5.jpg',  'img/ftimages/6.jpg',
'img/ftimages/7.jpg',  'img/ftimages/8.jpg',  'img/ftimages/9.jpg',  'img/ftimages/10.jpg', 'img/ftimages/11.jpg', 'img/ftimages/12.jpg',
'img/ftimages/13.jpg', 'img/ftimages/14.jpg', 'img/ftimages/15.jpg', 'img/ftimages/16.jpg', 'img/ftimages/17.jpg', 'img/ftimages/18.jpg',
'img/ftimages/19.jpg', 'img/ftimages/20.jpg', 'img/ftimages/21.jpg', 'img/ftimages/22.jpg', 'img/ftimages/23.jpg', 'img/ftimages/24.jpg',
'img/ftimages/25.jpg', 'img/ftimages/26.jpg', 'img/ftimages/27.jpg', 'img/ftimages/28.jpg', 'img/ftimages/29.jpg', 'img/ftimages/30.jpg',
'img/ftimages/31.jpg', 'img/ftimages/32.jpg', 'img/ftimages/33.jpg', 'img/ftimages/34.jpg', 'img/ftimages/35.jpg', 'img/ftimages/36.jpg',
'img/ftimages/37.jpg', 'img/ftimages/38.jpg', 'img/ftimages/39.jpg', 'img/ftimages/40.jpg', 'img/ftimages/41.jpg', 'img/ftimages/42.jpg',
'img/ftimages/43.jpg', 'img/ftimages/44.jpg', 'img/ftimages/45.jpg', 'img/ftimages/46.jpg', 'img/ftimages/47.jpg', 'img/ftimages/48.jpg',
'img/ftimages/49.jpg', 'img/ftimages/50.jpg', 'img/ftimages/51.jpg', 'img/ftimages/52.jpg', 'img/ftimages/53.jpg', 'img/ftimages/54.jpg',
'img/ftimages/55.jpg', 'img/ftimages/56.jpg', 'img/ftimages/57.jpg', 'img/ftimages/58.jpg', 'img/ftimages/59.jpg', 'img/ftimages/60.jpg',
'img/ftimages/61.jpg', 'img/ftimages/62.jpg', 'img/ftimages/63.jpg', 'img/ftimages/64.jpg', 'img/ftimages/65.jpg', 'img/ftimages/66.jpg',
'img/ftimages/67.jpg', 'img/ftimages/68.jpg', 'img/ftimages/69.jpg', 'img/ftimages/70.jpg', 'img/ftimages/71.jpg', 'img/ftimages/72.jpg',
'img/ftimages/73.jpg', 'img/ftimages/74.jpg', 'img/ftimages/75.jpg', 'img/ftimages/76.jpg', 'img/ftimages/77.jpg', 'img/ftimages/78.jpg',
'img/ftimages/79.jpg', 'img/ftimages/80.jpg', 'img/ftimages/81.jpg', 'img/ftimages/82.jpg', 'img/ftimages/83.jpg', 'img/ftimages/84.jpg',
'img/ftimages/85.jpg', 'img/ftimages/86.jpg', 'img/ftimages/87.jpg', 'img/ftimages/88.jpg', 'img/ftimages/89.jpg', 'img/ftimages/90.jpg',
'img/ftimages/91.jpg', 'img/ftimages/92.jpg', 'img/ftimages/93.jpg', 'img/ftimages/94.jpg', 'img/ftimages/95.jpg', 'img/ftimages/91.jpg', 
'img/ftimages/92.jpg', 'img/ftimages/93.jpg',

'img/ftimages/1(1).jpg',  'img/ftimages/2(1).jpg',  'img/ftimages/3(1).jpg',  'img/ftimages/4(1).jpg',  'img/ftimages/5(1).jpg',  'img/ftimages/6.jpg',
'img/ftimages/7(1).jpg',  'img/ftimages/8(1).jpg',  'img/ftimages/9(1).jpg',  'img/ftimages/10(1).jpg', 'img/ftimages/11(1).jpg', 'img/ftimages/12.jpg',
'img/ftimages/13(1).jpg', 'img/ftimages/14(1).jpg', 'img/ftimages/15(1).jpg', 'img/ftimages/16(1).jpg', 'img/ftimages/17(1).jpg', 'img/ftimages/18.jpg',
'img/ftimages/19(1).jpg', 'img/ftimages/20(1).jpg', 'img/ftimages/21(1).jpg', 'img/ftimages/22(1).jpg', 'img/ftimages/23(1).jpg', 'img/ftimages/24.jpg',
'img/ftimages/25(1).jpg', 'img/ftimages/26(1).jpg', 'img/ftimages/27(1).jpg', 'img/ftimages/28(1).jpg', 'img/ftimages/29(1).jpg', 'img/ftimages/30.jpg',
'img/ftimages/31(1).jpg', 'img/ftimages/32(1).jpg', 'img/ftimages/33(1).jpg', 'img/ftimages/34(1).jpg', 'img/ftimages/35(1).jpg', 'img/ftimages/36.jpg',
'img/ftimages/37(1).jpg', 'img/ftimages/38(1).jpg', 'img/ftimages/39(1).jpg', 'img/ftimages/40(1).jpg', 'img/ftimages/41(1).jpg', 'img/ftimages/42.jpg',
'img/ftimages/43(1).jpg', 'img/ftimages/44(1).jpg', 'img/ftimages/45(1).jpg', 'img/ftimages/46(1).jpg', 'img/ftimages/47(1).jpg', 'img/ftimages/48.jpg',
'img/ftimages/49(1).jpg', 'img/ftimages/50(1).jpg', 'img/ftimages/51(1).jpg', 'img/ftimages/52(1).jpg', 'img/ftimages/53(1).jpg', 'img/ftimages/54.jpg',
'img/ftimages/55(1).jpg', 'img/ftimages/56(1).jpg', 'img/ftimages/57(1).jpg', 'img/ftimages/58(1).jpg', 'img/ftimages/59(1).jpg', 'img/ftimages/60.jpg',
'img/ftimages/61(1).jpg', 'img/ftimages/62(1).jpg', 'img/ftimages/63(1).jpg', 'img/ftimages/64(1).jpg', 'img/ftimages/65(1).jpg', 'img/ftimages/66.jpg',
'img/ftimages/67(1).jpg', 'img/ftimages/68(1).jpg', 'img/ftimages/69(1).jpg', 'img/ftimages/70(1).jpg', 'img/ftimages/71(1).jpg', 'img/ftimages/72.jpg',
'img/ftimages/73(1).jpg', 'img/ftimages/74(1).jpg', 'img/ftimages/75(1).jpg', 'img/ftimages/76(1).jpg', 'img/ftimages/77(1).jpg', 'img/ftimages/78.jpg',
'img/ftimages/79(1).jpg', 'img/ftimages/80(1).jpg', 'img/ftimages/81(1).jpg', 'img/ftimages/82(1).jpg', 'img/ftimages/83(1).jpg', 'img/ftimages/84.jpg',
'img/ftimages/85(1).jpg', 'img/ftimages/86(1).jpg', 'img/ftimages/87(1).jpg', 'img/ftimages/88(1).jpg', 'img/ftimages/89(1).jpg', 'img/ftimages/90.jpg',
'img/ftimages/91(1).jpg', 'img/ftimages/92(1).jpg', 'img/ftimages/93(1).jpg', 'img/ftimages/94(1).jpg', 'img/ftimages/95.jpg',
'img/ftimages/37(1).jpg' 

];
		var mas=[];
		
		function mkChanges(membImg, membName, Prof) {
			var x;
			do {
			   x=rand_num(0,names.length) 
			  }
			while (mas.indexOf(x)>-1) 
			if(mas.length>10) { mas=[]; }
			mas.push(x);
			var name=names[x];
			var img=images[x];
			var profit=rand_num(800,5000);
			if (  document.getElementById(membImg) && 
				  document.getElementById(membName) &&
				  document.getElementById(Prof)
			   ) {

			     document.getElementById(membImg).src=img;
			     document.getElementById(membName).innerHTML=name;
			     document.getElementById(Prof).innerHTML="$"+profit;
		      }
		}

		function checkMember() {
			var tmpNum = rand_num(0,3);
			var membImgTmp = 'usr_img'+ tmpNum;
			var membNameTmp = 'usr_name'+tmpNum;
			var ProfTmp = 'usr_sum'+tmpNum;
            mkChanges(membImgTmp, membNameTmp, ProfTmp);
        }

        setInterval(checkMember, rand_num(2000, 3000));
        setInterval(mkChanges.bind(this, 'usrs_img', 'usrs_name', 'usrs_sum'), rand_num(4000, 6000));
