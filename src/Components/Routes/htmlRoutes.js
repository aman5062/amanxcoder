import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WhatIsHtml from '../HTML/Whatishtml';
import HowHtmlWorks from '../HTML/Howhtmlworks';
import InstallingHtml from '../HTML/InstallingHtml';
import ExecutingHtml from '../HTML/ExecutingHtml';
import PageStructure from '../HTML/PageStructure';
import KeyTags from '../HTML/KeyTags';
import Elements from '../HTML/Elements';
import Attributes from '../HTML/Attributes';
import Comments from '../HTML/Comments';
import IdsClasses from '../HTML/IdsAndClasses';
import SkeletalTags from '../HTML/SkeletalTags';
import HeadingTags from '../HTML/HeadingTags';
import ParagraphTag from '../HTML/ParagraphTag';
import HorizontalLineTag from '../HTML/HorizontalLineTag';
import LineBreakTag from '../HTML/LineBreakTag';
import AnchorTag from '../HTML/AnchorTag';
import ImageTag from '../HTML/ImageTag';
import PreformattedTextTag from '../HTML/PreformattedTextTag';
import InlineElements from '../HTML/InlineElements';
import BlockElements from '../HTML/BlockElements';
import HtmlLists from '../HTML/Lists';
import UnorderedList from '../HTML/UnorderedList';
import OrderedList from '../HTML/OrderedList';
import DefinitionLists from '../HTML/DefinitionLists';
import HtmlTables from '../HTML/Tables';
import MoreOnTables from '../HTML/MoreOnTables';
import Forms from '../HTML/Forms';
import InputTypes from '../HTML/InputTypes';
import TextareaSelect from '../HTML/TextareaSelect';
import MoreOnForms from '../HTML/MoreOnForms';
import MetaTags from '../HTML/MetaTags';
import LinkScriptTags from '../HTML/LinkScriptTags';
import VideoAudioTags from '../HTML/VideoAudioTags';
import Svg from '../HTML/Svg';
import Iframes from '../HTML/Iframes';
import CodeTag from '../HTML/CodeTag';
import SemanticTags from '../HTML/SemanticTags';
import Canvas from '../HTML/Canvas';
import GlobalAttributes from '../HTML/GlobalAttributes';
import Entities from '../HTML/Entities';
import QuotationTag from '../HTML/QuotationTag';
import ObsoleteTags from '../HTML/ObsoleteTags';
import CharacterSets from '../HTML/CharacterSets';
import IntroHTML from '../HTML/IntroHTML';

const HtmlRoutes = () => (
  <Routes>
    <Route path='introduction' element={<IntroHTML/>} />
    <Route path='' element={<IntroHTML/>} />
    <Route path='what-is-html' element={<WhatIsHtml />} />
    <Route path='how-html-works' element={<HowHtmlWorks />} />
    <Route path='installing-html' element={<InstallingHtml />} />
    <Route path='executing-html' element={<ExecutingHtml />} />
    <Route path='page-structure' element={<PageStructure />} />
    <Route path='key-tags' element={<KeyTags />} />
    <Route path='elements' element={<Elements />} />
    <Route path='attributes' element={<Attributes />} />
    <Route path='comments' element={<Comments />} />
    <Route path='ids-classes' element={<IdsClasses />} />
    <Route path='skeletal-tags' element={<SkeletalTags />} />
    <Route path='heading-tags' element={<HeadingTags />} />
    <Route path='paragraph-tag' element={<ParagraphTag />} />
    <Route path='horizontal-line-tag' element={<HorizontalLineTag />} />
    <Route path='line-break-tag' element={<LineBreakTag />} />
    <Route path='anchor-tag' element={<AnchorTag />} />
    <Route path='image-tag' element={<ImageTag />} />
    <Route path='preformatted-text-tag' element={<PreformattedTextTag />} />
    <Route path='inline-elements' element={<InlineElements />} />
    <Route path='block-elements' element={<BlockElements />} />
    <Route path='lists' element={<HtmlLists />} />
    <Route path='unordered-list' element={<UnorderedList />} />
    <Route path='ordered-list' element={<OrderedList />} />
    <Route path='definition-lists' element={<DefinitionLists />} />
    <Route path='tables' element={<HtmlTables />} />
    <Route path='more-on-tables' element={<MoreOnTables />} />
    <Route path='forms' element={<Forms />} />
    <Route path='input-types' element={<InputTypes />} />
    <Route path='textarea-select' element={<TextareaSelect />} />
    <Route path='more-on-forms' element={<MoreOnForms />} />
    <Route path='meta-tags' element={<MetaTags />} />
    <Route path='link-script-tags' element={<LinkScriptTags />} />
    <Route path='video-audio-tags' element={<VideoAudioTags />} />
    <Route path='svg' element={<Svg />} />
    <Route path='iframes' element={<Iframes />} />
    <Route path='code-tag' element={<CodeTag />} />
    <Route path='semantic-tags' element={<SemanticTags />} />
    <Route path='canvas' element={<Canvas />} />
    <Route path='global-attributes' element={<GlobalAttributes />} />
    <Route path='entities' element={<Entities />} />
    <Route path='quotation-tag' element={<QuotationTag />} />
    <Route path='obsolete-tags' element={<ObsoleteTags />} />
    <Route path='character-sets' element={<CharacterSets />} />
  </Routes>
);

export default HtmlRoutes;
