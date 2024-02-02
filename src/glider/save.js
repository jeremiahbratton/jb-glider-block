/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes} ) {
	const blockProps = useBlockProps.save();
	console.log(blockProps);
	
	return (
		<div { ...blockProps }>
		<section 
			id={attributes.blockID}
			className = "jb-glider-container"
			data-slidesToShow={attributes.slidesToShow}
		 	data-slideToScroll={attributes.slidesToScroll}
			data-arrows={attributes.arrows}
			data-dots={attributes.dots}
			data-rewind={attributes.rewind}
			data-scrollLock={attributes.scrollLock}
			data-draggable={attributes.draggable}
		>
				<InnerBlocks.Content />
		</section>
		{attributes.arrows ? (
			<>
				<button aria-label="Previous" class="glider-prev" data-parent={attributes.blockID}>«</button>
				<button aria-label="Next" class="glider-next" data-parent={attributes.blockID}>»</button>
			</>
		) : null }
		{attributes.dots ? (
			<div class="dots" data-parent={attributes.blockID}></div>
		) : null }
		</div>
	);
}
