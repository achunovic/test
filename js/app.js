const myModal = new jBox('Modal', {
  attach: '.js-modal-btn',
  title: 'Bill',
  content: '<h1>Hi</h1>',
});

const $modalBtn = $('.js-modal-btn');

const onModalBtnClicked = (e) => {
	
	// const $currentBtn = $(e.currentTarget);

	// console.log($currentBtn);

	// const $title = $currentBtn.find('.js-title');
	// const $desc = $currentBtn.find('.js-desc');

	// const titleContent = $title.html();
	// const descContent = $desc.html();

	const $title = e.currentTarget.querySelector('.js-title')
	const $desc = e.currentTarget.querySelector('.js-desc')

	const titleContent = $title.innerHTML;
	const descContent = $desc.innerHTML;


	myModal.setTitle(titleContent);
	myModal.setContent(descContent);

	myModal.open()
}

$modalBtn.click(onModalBtnClicked);