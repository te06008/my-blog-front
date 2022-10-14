import { PreviewDataInterface, PreviewPresetInterface } from '../types';

export default function getPreviewData() {
  const previewJSON = window.localStorage.getItem('preview')!;
  const presetData = JSON.parse(previewJSON) as PreviewPresetInterface;
  const previewData = {
    ...presetData,
    tags: presetData.tags.replaceAll(' ', '').split(','),
  };
  return previewData as PreviewDataInterface;
}
