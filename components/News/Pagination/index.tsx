"use client";

import { useContext } from "react";
import style from "./index.module.scss";
import { appContext } from "@/context/NewsProvider";

export function NewsPagination() {
	const { page, navigate } = useContext(appContext);

	const buttons = new Array(page.max).fill(false);
	
  if(page.max <= 1) {
		return null;
	};

	function navigateTo(page: number) {
		return () => {
			navigate(page);
		};
	};

	return (
		<div className={style.container}>
			<ul>
				{
					buttons.map((_, i) => {
						const number = i + 1;
						const isTheCurrentPage = number === page.current;

						return (
							<li key={`page-button-${number}`}>
								<button
									role={isTheCurrentPage? "actived":"default"}
									onClick={navigateTo(number)}
								>
									{number}
								</button>
							</li>
						);
					})
				}
				<li><p>Procurando mais notícias? <span>Mude de página!</span></p></li>
			</ul>
		</div>
	);
};