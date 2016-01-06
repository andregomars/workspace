function ipsBetween(start, end) {
/*count how many ip addresses in and gived ip scope inbetween [start,end)
	ipsBetween("10.0.0.0", "10.0.0.50") => returns 50 
	ipsBetween("10.0.0.0", "10.0.1.0") => returns 256 
	ipsBetween("20.0.0.10", "20.0.1.0") => returns 246
*/
	/*
		divide into four groups, carried by 256 of each group
		e.g.
		10.0.3.0 == 10*256^3+0*256^2+3*256+0
		192.168.0.1 == 192*256^3+168*256*2+0*256+1
		
	*/
	return ip2int(end)-ip2int(start);	
}

const ip2int = function(ip) {
	return ip.split('.').map((v,i)=>parseInt(v)*Math.pow(256,(3-i))).reduce((a,b)=>a+b);
}
	
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));




