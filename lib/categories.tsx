"use client"
import { Scissors, Sparkles, Mic, Smile, Tags, Type } from 'lucide-react';
import type { Category } from '../types/categories';
import SegmentationIcon from './icons/SegmentationIcon';
import TranscriptionIcon from './icons/TranscriptionIcon';
import SentimentAnalysisIcon from './icons/SentimentAnalysisIcon';
import EmbeddingIcon from './icons/EmbeddingIcon';
import ClassificationIcon from './icons/ClassificationIcon';
import TextGenerationIcon from './icons/TextGenerationIcon';

export const categories: Category[] = [
  {
    title: "Segment",
    slug: "segment",
    icon: Scissors,
    description: "Slice and dice images with precision. Carve out objects and backgrounds like a digital sculptor.",
    status: "Coming Soon",
    colorName: "indigo",
    graphic: SegmentationIcon
  },
  {
    title: "Embed",
    slug: "embed",
    icon: Sparkles,
    description: "Transform words and pixels into mathematical magic.",
    status: "Coming Soon",
    colorName: "teal",
    graphic: EmbeddingIcon
  },
  {
    title: "Transcribe",
    slug: "transcribe",
    icon: Mic,
    description: "AI that hears all and forgets nothing (except the 'uhms').",
    status: "Coming Soon",
    colorName: "rose",
    graphic: TranscriptionIcon
  },
  {
    title: "Sentiment",
    slug: "sentiment",
    icon: Smile,
    description: "Read between the lines. From 🤗 to 😠, we've got feelings figured out.",
    status: "Coming Soon",
    colorName: "amber",
    graphic: SentimentAnalysisIcon
  },
  {
    title: "Classify",
    slug: "classify",
    icon: Tags,
    description: "Sort the digital chaos.",
    status: "Coming Soon",
    colorName: "purple",
    graphic: ClassificationIcon
  },
  {
    title: "Generate Text",
    slug: "generate-text",
    icon: Type,
    description: "Llama. Qwen. Enough said.",
    status: "Coming Soon",
    colorName: "blue",
    graphic: TextGenerationIcon
  }
];