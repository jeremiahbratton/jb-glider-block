/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import {ToggleControl, Panel, PanelBody, PanelRow, __experimentalNumberControl as NumberControl} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( {attributes, setAttributes} ) {
	let {dots,arrows,rewind,scrollLock, draggable, slidesToShow, slidesToScroll, blockID} = attributes;

	return (
		<>
		<InspectorControls>
			<Panel header="Glider Options">
				<PanelBody title="Navigation" initialOpen={true}>
					<PanelRow>
						<ToggleControl
							label="Show Arrows"
							help={
								arrows ?
								'Arrows are visible' : 'Arrows are hidden'
							}
							checked = { arrows }
							onChange  = {
								( value ) => {
									setAttributes( { arrows: value } );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show Dots"
							help={
								dots ?
								'Dots are visible' : 'Dots are hidden'
							}
							checked = { dots }
							onChange  = {
								( value ) => {
									setAttributes( { dots: value } );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Draggable"
							help={
								draggable ?
								'Can be scrolled by click and dragging with the mouse' : 'Cannot be scrolled by click and dragging with the mouse'
							}
							checked = { draggable }
							onChange  = {
								( value ) => {
									setAttributes( { draggable: value } );
								}
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody title="Behavior" initialOpen={false}>
						<PanelRow>
							<h3>Number of slides to show</h3>
							<NumberControl
								isShiftStepEnabled={ true }
								onChange={ (newValue, extra) => {setAttributes( { slidesToShow: newValue })} }
								shiftStep={ 1 }
								value={ slidesToShow }
								min={1}
								max={10}
							/>
						</PanelRow>
						<PanelRow>
							<h3>Number of slides to scroll</h3>
							<NumberControl
								isShiftStepEnabled={ true }
								onChange={ (newValue, extra) => {setAttributes( { slidesToScroll: newValue })} }
								shiftStep={ 1 }
								value={ slidesToScroll }
								min={1}
								max={10}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Rewind"
								help={
									rewind ?
									'Glider will return to first object when reaching the end' : 'Glider will not return to first object when reaching the end'
								}
								checked = { rewind }
								onChange  = {
									( value ) => {
										setAttributes( { rewind: value } );
									}
								}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Scroll Lock"
								help={
									scrollLock ?
									'Glider will scroll to the nearest slide after any scroll interactions' : 'Glider will not scroll to the nearest slide after any scroll interactions'
								}
								checked = { scrollLock }
								onChange  = {
									( value ) => {
										setAttributes( { scrollLock: value } );
									}
								}
							/>
						</PanelRow>
						</PanelBody>
			</Panel>
		</InspectorControls>
		<section { ...useBlockProps() }>
			<InnerBlocks/>
		</section>
		</>
	);
}
