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
    description: "Break down images into distinct segments based on the object or background.",
    status: "Coming Soon",
    colorName: "indigo",
    graphic: SegmentationIcon
  },
  {
    title: "Embed",
    slug: "embed",
    icon: Sparkles,
    description: "Create vector embeddings for text and images.",
    status: "Coming Soon",
    colorName: "teal",
    graphic: EmbeddingIcon
  },
  {
    title: "Transcribe",
    slug: "transcribe",
    icon: Mic,
    description: "Convert speech to text with high accuracy using advanced AI-powered transcription (Whisper).",
    status: "Coming Soon",
    colorName: "rose",
    graphic: TranscriptionIcon
  },
  {
    title: "Sentiment",
    slug: "sentiment",
    icon: Smile,
    description: "Analyze text to determine the emotional tone and attitude, classifying it as positive, negative, or neutral.",
    status: "Coming Soon",
    colorName: "amber",
    graphic: SentimentAnalysisIcon
  },
  {
    title: "Classify",
    slug: "classify",
    icon: Tags,
    description: "Categorize text or images into predefined classes using machine learning algorithms.",
    status: "Coming Soon",
    colorName: "purple",
    graphic: ClassificationIcon
  },
  {
    title: "Generate Text",
    slug: "generate-text",
    icon: Type,
    description: "Create human-like text based on prompts or context using advanced language models.",
    status: "Coming Soon",
    colorName: "blue",
    graphic: TextGenerationIcon
  }
];