function New() {
  return (
	<div className="swiper-slide">
		<article className="Card Card__news">
			<figure>
				<img src="/images/news.png" alt=""/>
			</figure>
			<div className='Card__main'>
				<p>أعلن المتحدث الرسمي لرئاسة أمن الدولة
					السعودية، الاثنين، نتائج التحقيقات</p>
				<a href="#" className="Button Button__light Button__small Button__arrow">
					قراءة المزيد
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
							<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
								<path d="M3.332 8.5h9.333"/>
								<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
							</g>
						</svg>
					</span>
				</a>
			</div>
		</article>
	</div>
  );
}

export default New;
