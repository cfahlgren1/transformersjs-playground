"use client"
import { Scissors, Sparkles, Mic, Smile, Tags, Type } from 'lucide-react';
import type { Category } from '../types/categories';
import SegmentationIcon from './icons/SegmentationIcon';
import TranscriptionIcon from './icons/TranscriptionIcon';
import SentimentAnalysisIcon from './icons/SentimentAnalysisIcon';
import EmbeddingIcon from './icons/EmbeddingIcon';
import ClassificationIcon from './icons/ClassificationIcon';
import TextGenerationIcon from './icons/TextGenerationIcon';
import Llama32Page from '@/app/category/generate-text/llama-3.2/page';
export const categories: Category[] = [
  {
    title: "Generate Text",
    slug: "generate-text",
    icon: Type,
    description: "Llama. Qwen. Enough said.",
    status: "Available",
    colorName: "blue",
    graphic: TextGenerationIcon,
    demos: [
      {
        title: "Llama 3.2",
        slug: "llama-3.2",
        component: Llama32Page,
        description: "Llama 3.2 in the browser. WebGPU FTW."
      }
    ]
  },
  {
    title: "Transcribe",
    slug: "transcribe",
    icon: Mic,
    description: "AI that hears all and forgets nothing (except the 'uhms').",
    status: "Available",
    colorName: "rose",
    graphic: TranscriptionIcon
  },
  {
    title: "Segment",
    slug: "segment",
    icon: Scissors,
    description: "Slice and dice images with precision. Carve out objects and backgrounds like a digital sculptor.",
    status: "Available",
    colorName: "indigo",
    graphic: SegmentationIcon
  },
  {
    title: "Embed",
    slug: "embed",
    icon: Sparkles,
    description: "Transform words and pixels into mathematical magic.",
    status: "Available",
    colorName: "teal",
    graphic: EmbeddingIcon
  },
  {
    title: "Sentiment",
    slug: "sentiment",
    icon: Smile,
    description: "Read between the lines. From 🤗 to 😠, we've got feelings figured out.",
    status: "Available",
    colorName: "amber",
    graphic: SentimentAnalysisIcon
  },
  {
    title: "Classify",
    slug: "classify",
    icon: Tags,
    description: "Sort the digital chaos.",
    status: "Available",
    colorName: "purple",
    graphic: ClassificationIcon
  },
];