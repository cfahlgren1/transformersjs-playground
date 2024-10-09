"use client"
import { Scissors, Sparkles, Mic, Smile } from 'lucide-react';
import type { Category } from '../types/categories';
import SegmentationIcon from './icons/SegmentationIcon';
import TranscriptionIcon from './icons/TranscriptionIcon';
import SentimentAnalysisIcon from './icons/SentimentAnalysisIcon';
import EmbeddingIcon from './icons/EmbeddingIcon';

export const categories: Category[] = [
  {
    title: "Segment",
    icon: Scissors,
    description: "Break down images into distinct segments based on the object or background.",
    status: "Coming Soon",
    colorName: "indigo",
    graphic: SegmentationIcon
  },
  {
    title: "Embed",
    icon: Sparkles,
    description: "Create vector embeddings for text and images.",
    status: "Coming Soon",
    colorName: "teal",
    graphic: EmbeddingIcon
  },
  {
    title: "Transcribe",
    icon: Mic,
    description: "Convert speech to text with high accuracy using advanced AI-powered transcription (Whisper).",
    status: "Coming Soon",
    colorName: "rose",
    graphic: TranscriptionIcon
  },
  {
    title: "Sentiment",
    icon: Smile,
    description: "Analyze text to determine the emotional tone and attitude, classifying it as positive, negative, or neutral.",
    status: "Coming Soon",
    colorName: "amber",
    graphic: SentimentAnalysisIcon
  }
];