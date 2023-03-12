let buttons = document.querySelectorAll('button')
let box = document.getElementById('box')
let values = ''
buttons.forEach(function(btn){
	btn.addEventListener('click',function(){
		if (btn.dataset.name =='Enter'){
			box.value =eval(values)
		}else if(btn.dataset.name == 'clear'){
			values = ''
			box.value = ''
		}else{
			values = values + btn.dataset.name
			box.value = values
		}
	})
})
buttons.forEach(function(btns){
	if (btns.getAttribute('id') == 'number_btn'){
	
		btns.addEventListener('mouseover',function(){
			btns.style.backgroundColor = 'red'
		btns.addEventListener('mouseout',function(){
			btns.style.backgroundColor = 'gray'
		})
		})
	}else if(btns.getAttribute('id')=='opreation'){
		btns.addEventListener('mouseover',function(){
			btns.style.backgroundColor = 'gray'
		btns.addEventListener('mouseout',function(){
			btns.style.backgroundColor = 'red'
		})
		})
	}else if(btns.getAttribute('id') == 'style_mores'){
		btns.addEventListener('mouseover',function(){
			btns.style.backgroundColor = 'green'
		})
		btns.addEventListener('mouseout',function(){
			btns.style.backgroundColor = 'pink'
		})
	}
})