import { PreviewDataInterface, PreviewPresetInterface } from '../types';
import { tagParser } from './tagParser';

export default function getPreviewData() {
  const previewJSON = window.localStorage.getItem('preview')!;
  const presetData = JSON.parse(previewJSON) as PreviewPresetInterface;
  const previewData = {
    ...presetData,
    tags: tagParser(presetData.tags),
  };
  return previewData as PreviewDataInterface;
}
