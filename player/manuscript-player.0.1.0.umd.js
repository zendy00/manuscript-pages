(function(Je,Qe){typeof exports=="object"&&typeof module<"u"?module.exports=Qe():typeof define=="function"&&define.amd?define(Qe):(Je=typeof globalThis<"u"?globalThis:Je||self,Je.manuscript=Qe())})(this,(function(){"use strict";const Je={async getActiveReplay(){return null},async setActiveReplay(){},async clearActiveReplay(){}},Qe={isPrompterOpen:()=>!1,async openPrompter(){},async closePrompter(){},async updatePrompter(){}},qa={isRecordingArmed:()=>!1},Ba={async get(){},async set(){},async remove(){},subscribe(){return()=>{}}},za={async saveScenario(){},async setEphemeralScenario(){},async clearEphemeralScenario(){},async getScenarioById(){return null},async getEphemeralEnvelope(){return null}},Fa={async tryHandoff(){return!1}};let ur=Je,hr=Qe,fr=qa,mr=Ba,gr=za,_r=Fa;function br(e){e.storage&&(ur=e.storage),e.prompter&&(hr=e.prompter),e.recording&&(fr=e.recording),e.prefs&&(mr=e.prefs),e.assetUrl&&e.assetUrl,e.scenarioStorage&&(gr=e.scenarioStorage),e.handoff&&(_r=e.handoff)}function Le(){return ur}function ie(){return hr}function Ha(){return fr}function W(){return mr}function et(){return gr}function Wa(){return _r}const hn="mn:player:state";function Ua(e){return e!==null&&typeof e=="object"&&typeof e.scenarioId=="string"&&typeof e.stepIndex=="number"}const ja={async getActiveReplay(){const e=sessionStorage.getItem(hn);if(!e)return null;try{const t=JSON.parse(e);return Ua(t)?t:null}catch{return null}},async setActiveReplay(e){sessionStorage.setItem(hn,JSON.stringify(e))},async clearActiveReplay(){sessionStorage.removeItem(hn)}},wt=new Map;function yr(e,t){const n=wt.get(e);if(n)for(const r of[...n])r(e,t)}const Va={async get(e){const t=sessionStorage.getItem(`pref:${e}`);if(t)try{return JSON.parse(t)}catch{return}},async set(e,t){sessionStorage.setItem(`pref:${e}`,JSON.stringify(t)),yr(e,t)},async remove(e){sessionStorage.removeItem(`pref:${e}`),yr(e,void 0)},subscribe(e,t){for(const n of e){let r=wt.get(n);r||(r=new Set,wt.set(n,r)),r.add(t)}return()=>{var n;for(const r of e)(n=wt.get(r))==null||n.delete(t)}}},Ga=e=>({resolveUrl(t){return e?new URL(t,e).href:t}}),Xa={isSupported:()=>!1,isPrompterOpen:()=>!1,async openPrompter(){},async closePrompter(){},async updatePrompter(){}},Ya={isRecordingArmed:()=>!1},Ka={async saveScenario(){},async setEphemeralScenario(){},async clearEphemeralScenario(){},async getScenarioById(){return null},async getEphemeralEnvelope(){return null}};function Za(e){br({storage:ja,prefs:Va,assetUrl:Ga(e==null?void 0:e.assetBaseUrl),prompter:Xa,recording:Ya,scenarioStorage:Ka})}let fn=null;function Ja(e){fn=e}function A(e,t){const n=e.replace(/[.-]/g,"_"),r=Qa();let o="";try{o=chrome.i18n.getMessage(n,r)}catch{}return o===""&&fn&&(o=fn(n,r)),o===""?e:o}function Qa(e){return[]}const es={extension_name:{message:"Manuscript",description:"Extension name shown in the browser extensions page and in store listings."},extension_description:{message:"DOM-aware browser extension for authoring versioned web demos and manuals",description:"Short pitch shown under the name in the browser extensions page and in store listings."},common_cancel:{message:"Cancel"},common_delete:{message:"Delete"},common_overwrite:{message:"Overwrite"},common_close:{message:"Close"},common_ok:{message:"OK"},common_delete_confirm:{message:'Delete the scenario "$NAME$"?',placeholders:{name:{content:"$1",example:"Checkout walkthrough"}}},common_untitled:{message:"Untitled"},common_got_it:{message:"Got it"},popup_title_start:{message:"Start a new walkthrough"},popup_cta_new:{message:"New Manuscript"},popup_cta_help:{message:"Need help?"},popup_cta_help_text:{message:"Open a web page, then press New Manuscript."},popup_cta_import:{message:"Open a JSON file"},popup_import_failed:{message:"Couldn't read this JSON file. Pick a valid Manuscript export."},popup_import_overwrite_confirm:{message:'A scenario with this id already exists: "$NAME$". Overwrite it?',placeholders:{name:{content:"$1",example:"Checkout walkthrough"}}},popup_list_heading:{message:"Previous Manuscripts"},popup_list_resume_tag:{message:"Resume"},popup_list_steps:{message:"$N$ steps",placeholders:{n:{content:"$1",example:"3"}}},popup_list_delete_aria:{message:"Delete $NAME$",placeholders:{name:{content:"$1",example:"Checkout walkthrough"}}},popup_detach_detached:{message:"↩ Inline"},popup_detach_inline_title:{message:"Back to inline popup"},popup_error_no_tab:{message:"No active tab found."},popup_error_bad_url:{message:"This page is not supported (chrome://, edge://, new tab, file:// etc.). Open a regular web page and try again."},popup_error_inject:{message:"The extension could not connect to this page. Refresh the page (F5) and try again."},popup_error_unknown:{message:"Unknown error occurred. Check the console."},popup_language_label:{message:"Language"},panel_aria_region:{message:"Manuscript authoring panel"},panel_close_aria:{message:"Close panel"},panel_palette_toggle_aria:{message:"Toggle dark mode"},panel_title_placeholder:{message:"Untitled walkthrough"},panel_tool_label:{message:"Annotation tools"},panel_tool_text:{message:"Text"},panel_tool_shape:{message:"Shape"},panel_tool_freedraw:{message:"Freedraw"},panel_replay_aria:{message:"Replay"},panel_record_aria:{message:"Record screen"},panel_replay_title:{message:"Replay walkthrough"},panel_prompter_aria:{message:"Open presenter prompter"},panel_export_aria:{message:"Export JSON"},panel_export_menu_full:{message:"Export"},panel_export_menu_full_meta:{message:"With thumbnails · full size"},panel_export_menu_lite:{message:"Export without thumbnails"},panel_export_menu_lite_meta:{message:"Lighter file · -lite"},panel_undo_aria:{message:"Undo (Ctrl+Z)"},panel_redo_aria:{message:"Redo (Ctrl+Shift+Z)"},panel_settings_aria:{message:"Settings"},panel_settings_title:{message:"Settings"},panel_settings_voice_label:{message:"Narration voice"},panel_settings_voice_auto:{message:"Auto (Google preferred)"},panel_settings_strict_url_label:{message:"Match full URL (query & hash)"},panel_settings_strict_url_help:{message:"On by default URL matching ignores ?query and #hash. Turn this on for sites that change the page via query or hash (e.g. ?tab=, #/reports) so step navigation and the wrong-page warning work."},panel_settings_close_aria:{message:"Close settings"},popup_tabs_local:{message:"Local"},popup_tabs_remote:{message:"Remote Library"},popup_remote_coming_soon:{message:"Remote library — coming soon."},popup_remote_empty_copy:{message:"Connect a public GitHub repo to load shared manuscripts."},popup_remote_add_cta:{message:"+ Add a GitHub source"},popup_remote_add_cta_aria:{message:"Add source"},popup_remote_refresh_all_aria:{message:"Refresh all sources"},popup_remote_remove_aria:{message:"Remove source"},popup_remote_add_placeholder:{message:"github.com/owner/repo  or  owner/repo/path"},popup_remote_add_submit:{message:"Add"},popup_remote_add_error_invalid:{message:"Invalid URL. Expected github.com/owner/repo or owner/repo."},popup_remote_add_error_empty:{message:"Enter a GitHub URL or owner/repo."},popup_remote_source_never_refreshed:{message:"Click ↻ refresh to load this source."},popup_remote_source_empty:{message:"No manuscripts in this folder yet."},popup_remote_folder_empty:{message:"This folder is empty."},popup_remote_back_aria:{message:"Back to parent folder"},popup_remote_collapse_aria:{message:"Collapse source"},popup_remote_expand_aria:{message:"Expand source"},popup_remote_progress:{message:"Loading"},popup_remote_steps_suffix:{message:"steps"},panel_ephemeral_warning:{message:"Edits won't be saved"},panel_ephemeral_import:{message:"Save to local"},panel_ephemeral_bridge_fallback:{message:"External page"},panel_ephemeral_saved:{message:"Saved to local"},panel_ephemeral_save_failed:{message:"Save failed"},copy_formatting:{message:"Copy formatting"},apply_this_step:{message:"This step only"},apply_all_steps:{message:"All steps"},recording_guide_title:{message:"Before you record"},recording_guide_subtitle:{message:"The browser shows two share dialogs. The first captures this tab; the second adds your TTS narration via system audio. Follow the numbered cues in each dialog."},recording_guide_step1_title:{message:"1. Required — allow video capture"},recording_guide_step1_alt:{message:"First share dialog — when the current tab appears, click Allow."},recording_guide_step1_desc_html:{message:"When the dialog below shows your current tab, click <strong>Allow</strong>."},recording_guide_step2_title:{message:"2. Optional — allow TTS audio capture"},recording_guide_step2_alt:{message:"Second share dialog — select a browser window and tick Also share system audio."},recording_guide_step2_desc_html:{message:"<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Pick a browser window.</li><li>Tick <strong>Also share system audio</strong> — required to capture the TTS voice.</li><li>Click <strong>Share</strong>.</li></ol><p>The video from this dialog isn't used. <strong>If you cancel this dialog the recording still runs, but the TTS voice will be silent in the file.</strong></p>"},recorder_title:{message:"Manuscript recorder"},recorder_not_recorded:{message:"This window is not recorded — it just controls the capture."},recorder_instruction:{message:"Click Start recording — the browser asks which surface to share. Pick your demo window and turn on system audio so the narration is captured."},recorder_share_title:{message:"Allow capture for video + TTS audio"},recorder_share_steps_html:{message:"<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Choose the browser window running your demo.</li><li>Tick <strong>Share system audio</strong> — required to record the TTS narration.</li><li>Click <strong>Share</strong>.</li></ol>"},recorder_start:{message:"Start recording"},recorder_stop:{message:"Stop & save"},recorder_hint:{message:"While recording — Space: pause / resume the demo (recording keeps going) · Esc: stop & save"},recorder_status_ready:{message:"Ready."},recorder_status_recording:{message:"Recording"},recorder_status_paused:{message:"⏸ Paused — recording continues"},recorder_scenario_playing:{message:"Scenario playing"},recorder_scenario_paused:{message:"Scenario paused"},recorder_status_saved:{message:"Saved. You can close this window."},recorder_warn_no_tts:{message:`⚠ The narration won't be in the video. Share a Window (not a tab) and turn on "Share system audio". Click Start recording to try again.`},recorder_quality_label:{message:"Video quality"},recorder_quality_standard:{message:"Standard"},recorder_quality_standard_spec:{message:"5 Mbps · 1080p"},recorder_quality_high:{message:"High quality"},recorder_quality_high_spec:{message:"25 Mbps · 1080p"},recording_guide_keep_ui_label:{message:"Keep the panel and controls visible (tutorial mode)"},recording_guide_keep_ui_hint:{message:"Useful when you're recording a how-to that shows Manuscript's own UI. The default uncluttered recording is best for end-user walkthroughs."},recording_guide_mic_label:{message:"Also record my microphone"},recording_guide_mic_hint:{message:"Adds your voice to the recording so you can narrate live or add extra commentary while the scenario is paused. The browser will ask permission once."},recording_guide_keys_info_html:{message:"While recording — <kbd>Space</kbd> pauses / resumes the scenario (recording keeps going) · <kbd>Esc</kbd> stops and saves"},recording_guide_cancel:{message:"Cancel"},recording_guide_start:{message:"Start recording"},recording_paused_label:{message:"Recording"},recording_paused_aria:{message:"Click to resume the scenario"},recording_mic_failed:{message:"Microphone permission denied — recording continues without your voice."},step_name_placeholder:{message:"Step name"},step_desc_placeholder:{message:"Step description"},step_wand_aria:{message:"Pick element for step $N$",placeholders:{n:{content:"$1",example:"1"}}},step_wand_title:{message:"Pick element with wand"},step_action_aria:{message:"Action — pause replay on this step"},step_delete_aria:{message:"Delete step"},step_timer_aria:{message:"Auto-advance seconds"},step_annotations_title:{message:"Annotation tools"},step_annotation_delete_aria:{message:"Delete annotation"},step_subs_title:{message:"Inner flow"},sub_same_url_required:{message:"Sub-elements must be picked on the same page as the primary."},sub_add_aria:{message:"Add another element to this step"},sub_shift_left:{message:"Pull earlier (0.1s)"},sub_shift_right:{message:"Push later (0.1s)"},health_layer1:{message:"Stable attribute match — selector is healthy"},health_layer2:{message:"Layer 2 fallback — original attribute not found, matched by text + parent"},health_layer3:{message:"Layer 3 fallback — only the visual heuristic still matches; re-pick is recommended"},health_broken:{message:"Element not found on this page — re-pick required"},panel_validate_aria:{message:"Validate scenario"},validate_modal_title:{message:"Scenario health check"},validate_player_cross_origin_warn:{message:"Standalone player may stop here — the next step is a different origin."},validate_tts_autoplay_warn:{message:"From here on, narration won't autoplay on pages the tour advances to on its own — the browser blocks sound on a page opened without a click. The viewer clicks the page to play its narration. Pages the viewer advances by clicking keep sound. (Affects both the standalone player and the extension.)"},validate_summary:{message:"$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $SKIPPED$ skipped (other pages)",placeholders:{ok:{content:"$1",example:"8"},fallback:{content:"$2",example:"2"},broken:{content:"$3",example:"1"},skipped:{content:"$4",example:"3"}}},validate_summary_running:{message:"$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $PENDING$ pending",placeholders:{ok:{content:"$1",example:"3"},fallback:{content:"$2",example:"1"},broken:{content:"$3",example:"1"},pending:{content:"$4",example:"5"}}},validate_start:{message:"Start"},validate_in_progress:{message:"Validating…"},validate_complete:{message:"Validation complete"},validate_checking:{message:"Checking this page · $URL$",placeholders:{url:{content:"$1",example:"https://example.com/"}}},validate_navigating_to:{message:"Moving to next page · $URL$",placeholders:{url:{content:"$1",example:"https://example.com/checkout"}}},validate_status_pending:{message:"Pending"},validate_label_ok:{message:"healthy"},validate_label_fallback:{message:"fallback"},validate_label_broken:{message:"broken"},validate_label_pending:{message:"pending"},validate_row_go:{message:"Go to step"},validate_row_repick:{message:"Re-pick element"},validate_status_green:{message:"Healthy"},validate_status_yellow:{message:"Layer 2 fallback"},validate_status_orange:{message:"Layer 3 fallback"},validate_status_red:{message:"Not found"},validate_status_skipped:{message:"Other page"},validate_status_no_element:{message:"No element picked"},validate_no_issues:{message:"All resolvable steps on this page check out. "},validate_close:{message:"Close"},step_link_aria:{message:"Go to $URL$",placeholders:{url:{content:"$1",example:"https://example.com"}}},step_insert_aria:{message:"Insert step here"},step_add_aria:{message:"Add step"},step_empty_name:{message:"Step Name"},replay_counter_aria:{message:"Step counter"},replay_prev_aria:{message:"Previous (←)"},replay_pause_aria:{message:"Pause/Play (Space)"},replay_next_aria:{message:"Next (→)"},replay_finish_aria:{message:"Finish (→)"},replay_exit_aria:{message:"Exit (Esc)"},replay_prompter_aria:{message:"Open presenter prompter"},replay_prompter_title:{message:"Presenter prompter"},replay_move_aria:{message:"Move controls (drag)"},replay_move_title:{message:"Drag to move"},replay_orient_aria:{message:"Toggle vertical/horizontal"},replay_tts_aria:{message:"Toggle narration"},replay_tts_title:{message:"Narration (TTS)"},replay_tts_blocked_hint:{message:"Click anywhere to enable sound"},prompter_tts_blocked_hint:{message:"Click the demo page to enable sound"},replay_action_prompt:{message:"Click the highlighted target to continue"},replay_action_skip:{message:"Skip"},replay_notfound_title:{message:"Couldn't find the target"},replay_notfound_body:{message:"The element this step relies on isn't on the page anymore. Skip this step or stop replay."},replay_notfound_skip:{message:"Skip"},replay_notfound_stop:{message:"Stop replay"},replay_url_mismatch_title:{message:"Different page"},replay_url_mismatch_body:{message:"This walkthrough was recorded on the page below. Open it now?"},replay_url_mismatch_navigate:{message:"Navigate"},replay_url_mismatch_force:{message:"Force replay here"},replay_url_mismatch_cancel:{message:"Cancel"},prompter_now:{message:"Now"},prompter_next:{message:"Next"},prompter_steps:{message:"Steps"},prompter_step_no:{message:"Step $N$",placeholders:{n:{content:"$1",example:"3"}}},prompter_waiting:{message:"Waiting…"},prompter_playing:{message:"Playing"},prompter_paused:{message:"Paused"},prompter_action_step:{message:"Action step"},prompter_prev_aria:{message:"Previous"},prompter_pause_aria:{message:"Pause/Play"},prompter_next_aria:{message:"Next"},prompter_tts_aria:{message:"Toggle narration"},prompter_tts_title:{message:"Narration (TTS)"},prompter_title:{message:"Manuscript · Prompter"},permission_thumbnail_needs_host:{message:"Thumbnails need host access. Click the Manuscript icon and press Start again to grant the permission."},toast_ambiguous_selector:{message:"This element matches multiple targets — pick something more specific."},toast_export_success:{message:"Exported ✓"},toast_export_failed:{message:"Export failed"},toast_no_steps:{message:"No steps"},player_handoff_unavailable:{message:"This tour can't continue on this page."}},ts={extension_name:{message:"Manuscript",description:"Extension name shown in the browser extensions page and in store listings."},extension_description:{message:"DOM 인식 기반으로 깨지지 않는 웹 시연·매뉴얼을 저작·재생하는 브라우저 확장 프로그램",description:"Short pitch shown under the name in the browser extensions page and in store listings."},common_cancel:{message:"취소"},common_delete:{message:"삭제"},common_overwrite:{message:"덮어쓰기"},common_close:{message:"닫기"},common_ok:{message:"확인"},common_delete_confirm:{message:'"$NAME$" 시나리오를 삭제하시겠습니까?',placeholders:{name:{content:"$1",example:"결제 안내"}}},common_untitled:{message:"제목 없음"},common_got_it:{message:"확인"},popup_title_start:{message:"새 시연 시작"},popup_cta_new:{message:"새 매뉴스크립트"},popup_cta_help:{message:"도움말"},popup_cta_help_text:{message:"웹 페이지를 연 후 새 매뉴스크립트 버튼을 누르세요."},popup_cta_import:{message:"JSON 파일 가져오기"},popup_import_failed:{message:"JSON 파일을 읽을 수 없습니다. 매뉴스크립트에서 내보낸 파일인지 확인해 주세요."},popup_import_overwrite_confirm:{message:'같은 id의 "$NAME$" 시나리오가 이미 있습니다. 덮어쓸까요?',placeholders:{name:{content:"$1",example:"결제 안내"}}},popup_list_heading:{message:"이전 매뉴스크립트"},popup_list_resume_tag:{message:"이어하기"},popup_list_steps:{message:"$N$개 단계",placeholders:{n:{content:"$1",example:"3"}}},popup_list_delete_aria:{message:"$NAME$ 삭제",placeholders:{name:{content:"$1",example:"결제 안내"}}},popup_detach_detached:{message:"↩ 인라인"},popup_detach_inline_title:{message:"인라인 팝업으로 돌아가기"},popup_error_no_tab:{message:"활성 탭을 찾을 수 없습니다."},popup_error_bad_url:{message:"이 페이지는 지원하지 않습니다 (chrome://, edge://, 새 탭, file:// 등). 일반 웹 페이지에서 다시 시도해 주세요."},popup_error_inject:{message:"이 페이지에 연결할 수 없습니다. F5로 페이지를 새로고침한 뒤 다시 시도하세요."},popup_error_unknown:{message:"알 수 없는 오류가 발생했습니다. 콘솔을 확인하세요."},popup_language_label:{message:"언어"},panel_aria_region:{message:"매뉴스크립트 작성 패널"},panel_close_aria:{message:"패널 닫기"},panel_palette_toggle_aria:{message:"다크 모드 전환"},panel_title_placeholder:{message:"제목 없는 시연"},panel_tool_label:{message:"주석 도구"},panel_tool_text:{message:"텍스트"},panel_tool_shape:{message:"도형"},panel_tool_freedraw:{message:"자유 그리기"},panel_replay_aria:{message:"재생"},panel_record_aria:{message:"화면 녹화"},panel_replay_title:{message:"시연 재생"},panel_prompter_aria:{message:"발표자 프롬프터 열기"},panel_export_aria:{message:"JSON 내보내기"},panel_export_menu_full:{message:"전체 내보내기"},panel_export_menu_full_meta:{message:"썸네일 포함 · 원본 크기"},panel_export_menu_lite:{message:"썸네일 없이 내보내기"},panel_export_menu_lite_meta:{message:"용량 ↓ · 가벼운 -lite 파일"},panel_undo_aria:{message:"되돌리기 (Ctrl+Z)"},panel_redo_aria:{message:"다시 실행 (Ctrl+Shift+Z)"},panel_settings_aria:{message:"설정"},panel_settings_title:{message:"설정"},panel_settings_voice_label:{message:"내레이션 음성"},panel_settings_voice_auto:{message:"자동 (Google 우선)"},panel_settings_strict_url_label:{message:"전체 URL 일치 (쿼리·해시)"},panel_settings_strict_url_help:{message:"기본 URL 일치는 ?쿼리와 #해시를 무시합니다. 쿼리나 해시로 화면이 바뀌는 사이트(예: ?tab=, #/reports)라면 이 옵션을 켜야 단계 이동과 페이지 불일치 경고가 제대로 동작합니다."},panel_settings_close_aria:{message:"설정 닫기"},popup_tabs_local:{message:"내 라이브러리"},popup_tabs_remote:{message:"원격저장소"},popup_remote_coming_soon:{message:"원격저장소 라이브러리 — 곧 제공됩니다."},popup_remote_empty_copy:{message:"GitHub 공개 리포를 연결해서 공유 시나리오를 불러오세요."},popup_remote_add_cta:{message:"+ GitHub 소스 추가"},popup_remote_add_cta_aria:{message:"소스 추가"},popup_remote_refresh_all_aria:{message:"전체 새로고침"},popup_remote_remove_aria:{message:"소스 제거"},popup_remote_add_placeholder:{message:"github.com/owner/repo 또는 owner/repo/path"},popup_remote_add_submit:{message:"추가"},popup_remote_add_error_invalid:{message:"URL 형식이 올바르지 않습니다. github.com/owner/repo 또는 owner/repo 형식으로 입력해주세요."},popup_remote_add_error_empty:{message:"GitHub URL 또는 owner/repo를 입력해주세요."},popup_remote_source_never_refreshed:{message:"↻ 새로고침을 눌러 이 소스의 시나리오를 불러오세요."},popup_remote_source_empty:{message:"이 폴더에는 아직 시나리오가 없습니다."},popup_remote_folder_empty:{message:"비어있는 폴더입니다."},popup_remote_back_aria:{message:"상위 폴더로"},popup_remote_collapse_aria:{message:"접기"},popup_remote_expand_aria:{message:"펼치기"},popup_remote_progress:{message:"불러오는 중"},popup_remote_steps_suffix:{message:"단계"},panel_ephemeral_warning:{message:"편집은 저장되지 않습니다"},panel_ephemeral_import:{message:"내 라이브러리에 저장"},panel_ephemeral_bridge_fallback:{message:"외부 페이지"},panel_ephemeral_saved:{message:"라이브러리에 저장했습니다"},panel_ephemeral_save_failed:{message:"저장에 실패했습니다"},copy_formatting:{message:"서식 복사"},apply_this_step:{message:"이 스텝만"},apply_all_steps:{message:"전체 스텝"},recording_guide_title:{message:"녹화 시작 전"},recording_guide_subtitle:{message:"브라우저가 share dialog 를 두 번 띄웁니다. 첫 번째는 이 탭을 캡처하고, 두 번째는 시스템 오디오로 TTS 음성을 추가합니다. 각 다이얼로그의 번호 순서대로 진행하세요."},recording_guide_step1_title:{message:"1. 영상 녹화를 위한 필수 허용"},recording_guide_step1_alt:{message:"첫 번째 share dialog — 현재 탭이 나타나면 허용을 클릭하세요."},recording_guide_step1_desc_html:{message:"아래 다이얼로그에 현재 탭이 나타나면 <strong>허용</strong>을 클릭합니다."},recording_guide_step2_title:{message:"2. TTS 녹음을 위한 옵션 허용"},recording_guide_step2_alt:{message:"두 번째 share dialog — 브라우저 창 선택 + 시스템 오디오 공유 체크."},recording_guide_step2_desc_html:{message:"<ol><li>상단의 <strong>Window(윈도우)</strong> 탭을 선택합니다.</li><li>브라우저 창을 선택합니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 음성 녹음 필수.</li><li><strong>공유</strong>를 클릭합니다.</li></ol><p>두 번째 다이얼로그의 영상은 사용되지 않습니다. <strong>이 다이얼로그를 취소해도 녹화는 진행되지만 TTS 음성은 녹음되지 않습니다.</strong></p>"},recorder_title:{message:"Manuscript 녹화기"},recorder_not_recorded:{message:"이 창은 녹화되지 않습니다 — 녹화를 제어하는 창입니다."},recorder_instruction:{message:"녹화 시작을 누르면 브라우저가 공유할 화면을 묻습니다. 데모 창을 고르고 시스템 오디오를 켜야 내레이션이 녹음됩니다."},recorder_share_title:{message:"영상 + TTS 음성 녹화 허용"},recorder_share_steps_html:{message:"<ol><li>상단의 <strong>창</strong> 탭을 선택합니다.</li><li>데모가 열린 브라우저 창을 고릅니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 내레이션 녹음에 필요.</li><li><strong>공유</strong>를 누릅니다.</li></ol>"},recorder_start:{message:"녹화 시작"},recorder_stop:{message:"정지 후 저장"},recorder_hint:{message:"녹화 중 — Space: 데모 일시정지 / 재개 (녹화는 계속) · Esc: 정지 후 저장"},recorder_status_ready:{message:"준비됨."},recorder_status_recording:{message:"녹화 중"},recorder_status_paused:{message:"⏸ 일시정지 — 녹화는 계속됩니다"},recorder_scenario_playing:{message:"시나리오 재생 중"},recorder_scenario_paused:{message:"시나리오 일시정지 중"},recorder_status_saved:{message:"저장됨. 이 창을 닫아도 됩니다."},recorder_warn_no_tts:{message:"⚠ 내레이션이 영상에 들어가지 않습니다. 탭이 아니라 '창'을 공유하고 '시스템 오디오 공유'를 켜세요. '녹화 시작'을 다시 눌러 주세요."},recorder_quality_label:{message:"영상 화질"},recorder_quality_standard:{message:"일반 화질"},recorder_quality_standard_spec:{message:"5 Mbps · 1080p"},recorder_quality_high:{message:"고화질"},recorder_quality_high_spec:{message:"25 Mbps · 1080p"},recording_guide_keep_ui_label:{message:"패널·컨트롤을 영상에 함께 노출 (튜토리얼 모드)"},recording_guide_keep_ui_hint:{message:"Manuscript UI를 직접 보여주는 how-to 녹화에 사용합니다. 일반 워크스루는 기본(자동 숨김)이 더 깔끔합니다."},recording_guide_mic_label:{message:"내 마이크도 함께 녹음"},recording_guide_mic_hint:{message:"시나리오 일시중지 중에 직접 설명을 더하거나 라이브 보이스 오버를 추가할 수 있도록 마이크 음성을 함께 녹음합니다. 브라우저가 한 번 권한을 요청합니다."},recording_guide_keys_info_html:{message:"녹화 중 — <kbd>Space</kbd> 시나리오 일시중지 / 재개 (녹화는 계속) · <kbd>Esc</kbd> 종료 후 저장"},recording_guide_cancel:{message:"취소"},recording_guide_start:{message:"녹화 시작"},recording_paused_label:{message:"녹화 중"},recording_paused_aria:{message:"클릭하여 시나리오 재개"},recording_mic_failed:{message:"마이크 권한 거부 — 보이스 없이 녹화를 계속합니다."},step_name_placeholder:{message:"단계 이름"},step_desc_placeholder:{message:"단계 설명"},step_wand_aria:{message:"단계 $N$의 요소 선택",placeholders:{n:{content:"$1",example:"1"}}},step_wand_title:{message:"요소 선택"},step_action_aria:{message:"액션 — 이 단계에서 재생을 멈춤"},step_delete_aria:{message:"단계 삭제"},step_timer_aria:{message:"자동 진행 시간(초)"},step_annotations_title:{message:"주석 도구"},step_annotation_delete_aria:{message:"주석 삭제"},step_subs_title:{message:"내부 흐름"},sub_same_url_required:{message:"보조 element 는 대표 element 와 같은 페이지에서만 추가할 수 있습니다."},sub_add_aria:{message:"이 스텝에 element 추가"},sub_shift_left:{message:"0.1초 앞당기기"},sub_shift_right:{message:"0.1초 늦추기"},health_layer1:{message:"기본 selector 정상"},health_layer2:{message:"Layer 2 fallback — 원본 속성 못 찾음, 텍스트+부모 구조로 매칭"},health_layer3:{message:"Layer 3 fallback — 시각 휴리스틱만 남음, 재픽 권장"},health_broken:{message:"이 페이지에서 element 못 찾음 — 재픽 필요"},panel_validate_aria:{message:"시연 검증"},validate_modal_title:{message:"시연 상태 검증"},validate_player_cross_origin_warn:{message:"여기서 standalone player 재생이 멈출 수 있어요 — 다음 단계가 다른 출처(cross-origin)입니다."},validate_tts_autoplay_warn:{message:"여기서부터, 투어가 자동으로 넘어가는 페이지에서는 내레이션이 자동 재생되지 않아요 — 브라우저가 클릭 없이 열린 페이지의 소리를 막기 때문입니다. 보는 사람이 페이지를 클릭하면 그 페이지의 음성이 재생됩니다. 직접 클릭해서 넘긴 페이지는 소리가 이어져요. (standalone player·확장 모두 해당)"},validate_summary:{message:"정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 다른 페이지 $SKIPPED$",placeholders:{ok:{content:"$1",example:"8"},fallback:{content:"$2",example:"2"},broken:{content:"$3",example:"1"},skipped:{content:"$4",example:"3"}}},validate_summary_running:{message:"정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 대기 $PENDING$",placeholders:{ok:{content:"$1",example:"3"},fallback:{content:"$2",example:"1"},broken:{content:"$3",example:"1"},pending:{content:"$4",example:"5"}}},validate_start:{message:"검증 시작"},validate_in_progress:{message:"검증 중…"},validate_complete:{message:"검증 완료"},validate_checking:{message:"이 페이지 검증 중 · $URL$",placeholders:{url:{content:"$1",example:"https://example.com/"}}},validate_navigating_to:{message:"다음 페이지로 이동 중 · $URL$",placeholders:{url:{content:"$1",example:"https://example.com/checkout"}}},validate_status_pending:{message:"대기"},validate_label_ok:{message:"정상"},validate_label_fallback:{message:"fallback"},validate_label_broken:{message:"깨짐"},validate_label_pending:{message:"대기"},validate_row_go:{message:"이 스텝 보기"},validate_row_repick:{message:"재픽"},validate_status_green:{message:"정상"},validate_status_yellow:{message:"Layer 2 fallback"},validate_status_orange:{message:"Layer 3 fallback"},validate_status_red:{message:"못 찾음"},validate_status_skipped:{message:"다른 페이지"},validate_status_no_element:{message:"element 미픽"},validate_no_issues:{message:"이 페이지의 step 들은 모두 정상입니다."},validate_close:{message:"닫기"},step_link_aria:{message:"$URL$로 이동",placeholders:{url:{content:"$1",example:"https://example.com"}}},step_insert_aria:{message:"여기에 단계 삽입"},step_add_aria:{message:"단계 추가"},step_empty_name:{message:"단계 이름"},replay_counter_aria:{message:"단계 카운터"},replay_prev_aria:{message:"이전 (←)"},replay_pause_aria:{message:"일시정지/재생 (Space)"},replay_next_aria:{message:"다음 (→)"},replay_finish_aria:{message:"완료 (→)"},replay_exit_aria:{message:"종료 (Esc)"},replay_prompter_aria:{message:"발표자 프롬프터 열기"},replay_prompter_title:{message:"발표자 프롬프터"},replay_move_aria:{message:"컨트롤 이동 (드래그)"},replay_move_title:{message:"드래그로 이동"},replay_orient_aria:{message:"세로/가로 전환"},replay_tts_aria:{message:"내레이션 켜기/끄기"},replay_tts_title:{message:"내레이션 (TTS)"},replay_tts_blocked_hint:{message:"소리를 위해 아무 곳이나 클릭하세요"},prompter_tts_blocked_hint:{message:"소리를 위해 재생 화면을 클릭하세요"},replay_action_prompt:{message:"강조된 대상을 클릭하면 계속 진행됩니다"},replay_action_skip:{message:"건너뛰기"},replay_notfound_title:{message:"대상을 찾을 수 없습니다"},replay_notfound_body:{message:"이 단계가 가리키는 요소가 페이지에 더 이상 없습니다. 건너뛰거나 재생을 멈출 수 있습니다."},replay_notfound_skip:{message:"건너뛰기"},replay_notfound_stop:{message:"재생 멈추기"},replay_url_mismatch_title:{message:"다른 페이지"},replay_url_mismatch_body:{message:"이 시연은 아래 페이지에서 녹화되었습니다. 그곳으로 이동할까요?"},replay_url_mismatch_navigate:{message:"이동"},replay_url_mismatch_force:{message:"여기서 강제 재생"},replay_url_mismatch_cancel:{message:"취소"},prompter_now:{message:"현재"},prompter_next:{message:"다음"},prompter_steps:{message:"단계"},prompter_step_no:{message:"단계 $N$",placeholders:{n:{content:"$1",example:"3"}}},prompter_waiting:{message:"대기 중…"},prompter_playing:{message:"재생 중"},prompter_paused:{message:"일시정지"},prompter_action_step:{message:"액션 단계"},prompter_prev_aria:{message:"이전"},prompter_pause_aria:{message:"일시정지/재생"},prompter_next_aria:{message:"다음"},prompter_tts_aria:{message:"내레이션 켜기/끄기"},prompter_tts_title:{message:"내레이션 (TTS)"},prompter_title:{message:"매뉴스크립트 · 프롬프터"},permission_thumbnail_needs_host:{message:"썸네일에 호스트 접근 권한이 필요합니다. 매뉴스크립트 아이콘을 클릭하여 시작을 다시 누르면 권한을 부여할 수 있습니다."},toast_ambiguous_selector:{message:"이 요소가 여러 대상과 일치합니다 — 더 구체적인 요소를 선택해 주세요."},toast_export_success:{message:"내보냄 ✓"},toast_export_failed:{message:"내보내기에 실패했습니다"},toast_no_steps:{message:"단계가 없습니다"},player_handoff_unavailable:{message:"이 투어는 여기서 계속할 수 없습니다."}};function ns(e,t){let n=e;for(let r=0;r<t.length;r++){const o=`$${r+1}`;n=n.replace(new RegExp(`\\${o}`,"g"),t[r]??"")}return n}function rs(e){return(t,n)=>{const r=e[t];return r?ns(r.message,n):""}}function os(){const n=(navigator.language||"en").split("-")[0]==="ko"?ts:es,r=rs(n);Ja(r)}const mn="manuscript:scenario-changed",as=500,x={scenario:null,currentStepIndex:0,saveTimer:null,ephemeral:!1,ephemeralSource:null};function vr(){x.ephemeral=!1,x.ephemeralSource=null}function N(){return x.scenario}function B(){return x.currentStepIndex}function ne(){return x.scenario?x.scenario.steps[x.currentStepIndex]??null:null}function Te(e){return document.addEventListener(mn,e),()=>document.removeEventListener(mn,e)}function Z(){document.dispatchEvent(new CustomEvent(mn)),ss()}function ce(){x.scenario&&(x.scenario.updatedAt=new Date().toISOString())}function ss(){if(!x.scenario)return;if(x.ephemeral){et().setEphemeralScenario(x.scenario,x.ephemeralSource).catch(t=>{console.error("[manuscript] ephemeral save failed",t)});return}x.saveTimer!==null&&window.clearTimeout(x.saveTimer);const e=x.scenario;x.saveTimer=window.setTimeout(()=>{x.saveTimer=null,et().saveScenario(e).catch(t=>{console.error("[manuscript] save failed",t)})},as)}function xr(){if(x.ephemeral){x.scenario&&et().setEphemeralScenario(x.scenario,x.ephemeralSource).catch(e=>{console.error("[manuscript] ephemeral flush save failed",e)});return}x.saveTimer!==null&&(window.clearTimeout(x.saveTimer),x.saveTimer=null,x.scenario&&et().saveScenario(x.scenario).catch(e=>{console.error("[manuscript] flush save failed",e)}))}const wr="0.1.2";function is(e){const t=cs(e)??e;return t.length>14?`${t.slice(0,13)}…`:t}function cs(e){return ls(e)}function ls(e){const t=e.split(",")[0];if(!t)return null;const n=t.trim();return n&&(n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'")?n.slice(1,-1):n).trim()||null}const ps=50;let le=[],Ce=-1,Pe=null,kt=!1;function kr(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function $r(){var t;const e=N();return e?((t=e.steps[B()])==null?void 0:t.id)??null:null}function ds(){const e=N();if(!e)return;const t=le[Ce];Ce>=0&&t&&JSON.stringify(t.scenario)===JSON.stringify(e)||(le.length=Ce+1,le.push({scenario:kr(e),stepId:$r()}),le.length>ps&&le.shift(),Ce=le.length-1)}function Sr(){Pe=null,kt=!1;const e=N();if(!e){le=[],Ce=-1;return}le=[{scenario:kr(e),stepId:$r()}],Ce=0}function Ie(e){Pe!==null&&Pe!==e&&Oe(),Pe=e,kt=!1}function Oe(){Pe!==null&&(Pe=null,kt&&(kt=!1,ds()))}function us(e,t){xr(),x.scenario=e,x.currentStepIndex=0,vr(),Z(),Sr()}function hs(){const e=x.ephemeral;xr(),x.scenario=null,x.currentStepIndex=0,vr(),e&&et().clearEphemeralScenario(),Z(),Sr()}function tt(e){const t=ne();if(!t||!x.scenario)return;const r={...t.spotlight??{},...e};for(const o of Object.keys(r))r[o]===void 0&&delete r[o];Object.keys(r).length===0?delete t.spotlight:t.spotlight=r,ce(),Z()}function $t(e){x.scenario&&(e<0||e>=x.scenario.steps.length||e!==x.currentStepIndex&&(x.currentStepIndex=e,Z()))}function fs(e){if(!x.scenario)return;const t={...e};for(const r of Object.keys(t))t[r]===void 0&&delete t[r];const n=Object.keys(t).length===0;for(const r of x.scenario.steps)n?delete r.spotlight:r.spotlight={...t};ce(),Z()}function Ar(e){const t=ne();!t||!x.scenario||(t.annotations=t.annotations.filter(n=>n.id!==e),ce(),Z())}function L(e,t){const n=ne();!n||!x.scenario||(n.annotations=n.annotations.map(r=>r.id===e?{...r,...t}:r),ce(),Z())}function Mr(){var e;return((e=ne())==null?void 0:e.annotations)??[]}function M(e){return Mr().find(t=>t.id===e)}function ms(e,t){const n=ne();!n||!x.scenario||(n.annotations=n.annotations.map(r=>r.kind===e?{...r,...t}:r),ce(),Z())}function gs(e,t){if(x.scenario){for(const n of x.scenario.steps)n.annotations=n.annotations.map(r=>r.kind===e?{...r,...t}:r);ce(),Z()}}function _s(e,t){if(!x.scenario)return;const n=t.trim();if(!n)return;const r=x.scenario.customColors??{},o=r[e]??[];o.includes(n)||(x.scenario.customColors={...r,[e]:[...o,n]},ce(),Z())}function bs(e,t){if(!x.scenario||!x.scenario.customColors)return;const n=x.scenario.customColors[e];!n||!n.includes(t)||(x.scenario.customColors={...x.scenario.customColors,[e]:n.filter(r=>r!==t)},ce(),Z())}const gn="manuscript:mode-changed";let St="idle";function Er(){return St}function Lr(e){if(e===St)return;const t=St;St=e,document.dispatchEvent(new CustomEvent(gn,{detail:{prev:t,next:e}}))}function Tr(e){const t=n=>e(n.detail);return document.addEventListener(gn,t),()=>document.removeEventListener(gn,t)}const Cr=5e3,U={scenarios:"manuscript.scenarios",lastEdited:"manuscript.lastEdited",settings:"manuscript.settings",popupMode:"manuscript.popupMode",detachedWindowId:"manuscript.detachedWindowId",activeReplay:"manuscript.activeReplay",replayControlsOrientation:"manuscript.replayControlsOrientation",replayControlsPosition:"manuscript.replayControlsPosition",pendingPanelByTab:"manuscript.pendingPanelByTab",activePanelByTab:"manuscript.activePanelByTab",annotationClipboard:"manuscript.annotationClipboard",prompterState:"manuscript.prompterState",prompterCommand:"manuscript.prompterCommand",prompterWindowId:"manuscript.prompterWindowId",prompterTabId:"manuscript.prompterTabId",prompterClientTabId:"manuscript.prompterClientTabId",ttsEnabled:"manuscript.ttsEnabled",ttsVoiceName:"manuscript.ttsVoiceName",ttsBlocked:"manuscript.ttsBlocked",palette:"manuscript.palette",remoteLibrary:"manuscript.remoteLibrary",remoteCollapsed:"manuscript.remoteCollapsed",ephemeralScenario:"manuscript.ephemeralScenario",validationSession:"manuscript.validationSession",recordingActive:"manuscript.recordingActive",recorderWindowId:"manuscript.recorderWindowId",recorderClientTabId:"manuscript.recorderClientTabId",recordingPendingArm:"manuscript.recordingPendingArm",recPrevWindowState:"manuscript.recPrevWindowState"},J=2147483e3,pe="http://www.w3.org/2000/svg",Pr="manuscript-spotlight-mask",ys="oklch(0.42 0.09 250)",vs=3,xs="rgb(0, 0, 0)",ws=.55,nt=14;let ge=null,j=null,z=null,F=null,I=null,ae=null,rt=0,_n=[],Re=null;function Ir(e){rt++,ge=e,j||As(),yn(),Ne(),Or(e),Re||(Re=Te(yn))}function bn(){rt++,ge=null,Rr(),Re==null||Re(),Re=null,j&&(j.remove(),j=null,z=null,F=null,I=null,ae=null)}function ks(e,t={}){var s;const n=t.durationMs??300;if(!ge||!j||n<=0){Ir(e),(s=t.onDone)==null||s.call(t);return}const r=$s();rt++;const o=rt;ge=e,yn(),Or(e);const a=performance.now();function i(c){var d;if(o!==rt)return;const l=Math.min(1,(c-a)/n),p=Ss(l),h=Nr(e);Dr({x:At(r.x,h.x,p),y:At(r.y,h.y,p),width:At(r.width,h.width,p),height:At(r.height,h.height,p)}),l<1?requestAnimationFrame(i):(Ne(),(d=t.onDone)==null||d.call(t))}requestAnimationFrame(i)}function $s(){if(!z)return{x:0,y:0,width:0,height:0};const e=4,t=Number(z.getAttribute("x")??0)+e,n=Number(z.getAttribute("y")??0)+e,r=Number(z.getAttribute("width")??0)-e*2,o=Number(z.getAttribute("height")??0)-e*2;return{x:t,y:n,width:r,height:o}}function At(e,t,n){return e+(t-e)*n}function Ss(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function Or(e){var n;Rr();const t=[window];try{const r=(n=e.ownerDocument)==null?void 0:n.defaultView;r&&r!==window&&t.push(r)}catch{}for(const r of t){const o=Ne;r.addEventListener("scroll",o,!0),_n.push({target:r,remove:()=>r.removeEventListener("scroll",o,!0)})}window.addEventListener("resize",Ne)}function Rr(){for(const e of _n)e.remove();_n=[],window.removeEventListener("resize",Ne)}function As(){j=document.createElementNS(pe,"svg"),j.setAttribute("data-manuscript","ui"),j.style.cssText=["position: fixed","top: 0","left: 0","width: 100vw","height: 100vh","pointer-events: none",`z-index: ${J}`].join("; "),j.setAttribute("width","100%"),j.setAttribute("height","100%");const e=document.createElementNS(pe,"defs"),t=document.createElementNS(pe,"mask");t.setAttribute("id",Pr);const n=document.createElementNS(pe,"rect");n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.setAttribute("fill","white"),t.appendChild(n),z=document.createElementNS(pe,"rect"),z.setAttribute("fill","black"),z.setAttribute("rx","4"),z.setAttribute("ry","4"),t.appendChild(z),e.appendChild(t),j.appendChild(e),ae=document.createElementNS(pe,"rect"),ae.setAttribute("width","100%"),ae.setAttribute("height","100%"),ae.setAttribute("mask",`url(#${Pr})`),j.appendChild(ae),F=document.createElementNS(pe,"rect"),F.setAttribute("fill","none"),F.setAttribute("rx","4"),F.setAttribute("ry","4"),F.style.pointerEvents="none",j.appendChild(F),I=document.createElementNS(pe,"rect"),I.setAttribute("fill","none"),I.setAttribute("stroke","transparent"),I.setAttribute("stroke-width",String(nt)),I.setAttribute("rx","4"),I.setAttribute("ry","4"),I.setAttribute("pointer-events","stroke"),I.style.cursor="pointer",I.addEventListener("click",Ms),j.appendChild(I),document.body.appendChild(j)}function yn(){var a;if(!F||!ae)return;const e=((a=ne())==null?void 0:a.spotlight)??{},t=e.stroke??ys,n=e.strokeWidth??vs,r=e.dimColor??xs,o=e.dimOpacity??ws;F.setAttribute("stroke",t),F.setAttribute("stroke-width",String(n)),ae.setAttribute("fill",r),ae.setAttribute("fill-opacity",String(Math.max(0,Math.min(1,o)))),Ne()}function Ms(e){Er()!=="replay"&&(!ge||!I||(e.stopPropagation(),e.preventDefault(),Promise.resolve().then(()=>Wp).then(t=>{I&&t.openSpotlightEditor(I)})))}function Ne(){ge&&Dr(Nr(ge))}function Nr(e){const t=e.getBoundingClientRect(),n=Es(e);return{x:t.left+n.x,y:t.top+n.y,width:t.width,height:t.height}}function Dr(e){if(!z||!F||!I)return;const t=4,n=e.x-t,r=e.y-t,o=e.width+t*2,a=e.height+t*2;z.setAttribute("x",String(n)),z.setAttribute("y",String(r)),z.setAttribute("width",String(o)),z.setAttribute("height",String(a));const i=Math.max(0,Number(F.getAttribute("stroke-width")??0)),s=n-i/2,c=r-i/2,l=o+i,p=a+i;F.setAttribute("x",String(s)),F.setAttribute("y",String(c)),F.setAttribute("width",String(l)),F.setAttribute("height",String(p));const h=s-nt/2,d=c-nt/2,u=l+nt,f=p+nt;I.setAttribute("x",String(h)),I.setAttribute("y",String(d)),I.setAttribute("width",String(u)),I.setAttribute("height",String(f))}function Es(e){try{const t=e.ownerDocument,n=t==null?void 0:t.defaultView;if(!n||n===window)return{x:0,y:0};const r=n.frameElement;if(!r)return{x:0,y:0};const o=r.getBoundingClientRect();return{x:o.left,y:o.top}}catch{return{x:0,y:0}}}function vn(e,t,n){if(e&&e.length){const[r,o]=t,a=Math.PI/180*n,i=Math.cos(a),s=Math.sin(a);for(const c of e){const[l,p]=c;c[0]=(l-r)*i-(p-o)*s+r,c[1]=(l-r)*s+(p-o)*i+o}}}function Ls(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ts(e,t,n,r=1){const o=n,a=Math.max(t,.1),i=e[0]&&e[0][0]&&typeof e[0][0]=="number"?[e]:e,s=[0,0];if(o)for(const l of i)vn(l,s,o);const c=(function(l,p,h){const d=[];for(const _ of l){const k=[..._];Ls(k[0],k[k.length-1])||k.push([k[0][0],k[0][1]]),k.length>2&&d.push(k)}const u=[];p=Math.max(p,.1);const f=[];for(const _ of d)for(let k=0;k<_.length-1;k++){const D=_[k],R=_[k+1];if(D[1]!==R[1]){const T=Math.min(D[1],R[1]);f.push({ymin:T,ymax:Math.max(D[1],R[1]),x:T===D[1]?D[0]:R[0],islope:(R[0]-D[0])/(R[1]-D[1])})}}if(f.sort(((_,k)=>_.ymin<k.ymin?-1:_.ymin>k.ymin?1:_.x<k.x?-1:_.x>k.x?1:_.ymax===k.ymax?0:(_.ymax-k.ymax)/Math.abs(_.ymax-k.ymax))),!f.length)return u;let m=[],g=f[0].ymin,b=0;for(;m.length||f.length;){if(f.length){let _=-1;for(let k=0;k<f.length&&!(f[k].ymin>g);k++)_=k;f.splice(0,_+1).forEach((k=>{m.push({s:g,edge:k})}))}if(m=m.filter((_=>!(_.edge.ymax<=g))),m.sort(((_,k)=>_.edge.x===k.edge.x?0:(_.edge.x-k.edge.x)/Math.abs(_.edge.x-k.edge.x))),(h!==1||b%p==0)&&m.length>1)for(let _=0;_<m.length;_+=2){const k=_+1;if(k>=m.length)break;const D=m[_].edge,R=m[k].edge;u.push([[Math.round(D.x),g],[Math.round(R.x),g]])}g+=h,m.forEach((_=>{_.edge.x=_.edge.x+h*_.edge.islope})),b++}return u})(i,a,r);if(o){for(const l of i)vn(l,s,-o);(function(l,p,h){const d=[];l.forEach((u=>d.push(...u))),vn(d,p,h)})(c,s,-o)}return c}function ot(e,t){var n;const r=t.hachureAngle+90;let o=t.hachureGap;o<0&&(o=4*t.strokeWidth),o=Math.round(Math.max(o,.1));let a=1;return t.roughness>=1&&(((n=t.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(a=o),Ts(e,o,r,a||1)}class xn{constructor(t){this.helper=t}fillPolygons(t,n){return this._fillPolygons(t,n)}_fillPolygons(t,n){const r=ot(t,n);return{type:"fillSketch",ops:this.renderLines(r,n)}}renderLines(t,n){const r=[];for(const o of t)r.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return r}}function Mt(e){const t=e[0],n=e[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}let Cs=class extends xn{fillPolygons(t,n){let r=n.hachureGap;r<0&&(r=4*n.strokeWidth),r=Math.max(r,.1);const o=ot(t,Object.assign({},n,{hachureGap:r})),a=Math.PI/180*n.hachureAngle,i=[],s=.5*r*Math.cos(a),c=.5*r*Math.sin(a);for(const[l,p]of o)Mt([l,p])&&i.push([[l[0]-s,l[1]+c],[...p]],[[l[0]+s,l[1]-c],[...p]]);return{type:"fillSketch",ops:this.renderLines(i,n)}}};class Ps extends xn{fillPolygons(t,n){const r=this._fillPolygons(t,n),o=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),a=this._fillPolygons(t,o);return r.ops=r.ops.concat(a.ops),r}}class Is{constructor(t){this.helper=t}fillPolygons(t,n){const r=ot(t,n=Object.assign({},n,{hachureAngle:0}));return this.dotsOnLines(r,n)}dotsOnLines(t,n){const r=[];let o=n.hachureGap;o<0&&(o=4*n.strokeWidth),o=Math.max(o,.1);let a=n.fillWeight;a<0&&(a=n.strokeWidth/2);const i=o/4;for(const s of t){const c=Mt(s),l=c/o,p=Math.ceil(l)-1,h=c-p*o,d=(s[0][0]+s[1][0])/2-o/4,u=Math.min(s[0][1],s[1][1]);for(let f=0;f<p;f++){const m=u+h+f*o,g=d-i+2*Math.random()*i,b=m-i+2*Math.random()*i,_=this.helper.ellipse(g,b,a,a,n);r.push(..._.ops)}}return{type:"fillSketch",ops:r}}}class Os{constructor(t){this.helper=t}fillPolygons(t,n){const r=ot(t,n);return{type:"fillSketch",ops:this.dashedLine(r,n)}}dashedLine(t,n){const r=n.dashOffset<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashOffset,o=n.dashGap<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashGap,a=[];return t.forEach((i=>{const s=Mt(i),c=Math.floor(s/(r+o)),l=(s+o-c*(r+o))/2;let p=i[0],h=i[1];p[0]>h[0]&&(p=i[1],h=i[0]);const d=Math.atan((h[1]-p[1])/(h[0]-p[0]));for(let u=0;u<c;u++){const f=u*(r+o),m=f+r,g=[p[0]+f*Math.cos(d)+l*Math.cos(d),p[1]+f*Math.sin(d)+l*Math.sin(d)],b=[p[0]+m*Math.cos(d)+l*Math.cos(d),p[1]+m*Math.sin(d)+l*Math.sin(d)];a.push(...this.helper.doubleLineOps(g[0],g[1],b[0],b[1],n))}})),a}}class Rs{constructor(t){this.helper=t}fillPolygons(t,n){const r=n.hachureGap<0?4*n.strokeWidth:n.hachureGap,o=n.zigzagOffset<0?r:n.zigzagOffset,a=ot(t,n=Object.assign({},n,{hachureGap:r+o}));return{type:"fillSketch",ops:this.zigzagLines(a,o,n)}}zigzagLines(t,n,r){const o=[];return t.forEach((a=>{const i=Mt(a),s=Math.round(i/(2*n));let c=a[0],l=a[1];c[0]>l[0]&&(c=a[1],l=a[0]);const p=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let h=0;h<s;h++){const d=2*h*n,u=2*(h+1)*n,f=Math.sqrt(2*Math.pow(n,2)),m=[c[0]+d*Math.cos(p),c[1]+d*Math.sin(p)],g=[c[0]+u*Math.cos(p),c[1]+u*Math.sin(p)],b=[m[0]+f*Math.cos(p+Math.PI/4),m[1]+f*Math.sin(p+Math.PI/4)];o.push(...this.helper.doubleLineOps(m[0],m[1],b[0],b[1],r),...this.helper.doubleLineOps(b[0],b[1],g[0],g[1],r))}})),o}}const G={};class Ns{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const Ds=0,wn=1,qr=2,Et={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function kn(e,t){return e.type===t}function $n(e){const t=[],n=(function(i){const s=new Array;for(;i!=="";)if(i.match(/^([ \t\r\n,]+)/))i=i.substr(RegExp.$1.length);else if(i.match(/^([aAcChHlLmMqQsStTvVzZ])/))s[s.length]={type:Ds,text:RegExp.$1},i=i.substr(RegExp.$1.length);else{if(!i.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];s[s.length]={type:wn,text:`${parseFloat(RegExp.$1)}`},i=i.substr(RegExp.$1.length)}return s[s.length]={type:qr,text:""},s})(e);let r="BOD",o=0,a=n[o];for(;!kn(a,qr);){let i=0;const s=[];if(r==="BOD"){if(a.text!=="M"&&a.text!=="m")return $n("M0,0"+e);o++,i=Et[a.text],r=a.text}else kn(a,wn)?i=Et[r]:(o++,i=Et[a.text],r=a.text);if(!(o+i<n.length))throw new Error("Path data ended short");for(let c=o;c<o+i;c++){const l=n[c];if(!kn(l,wn))throw new Error("Param not a number: "+r+","+l.text);s[s.length]=+l.text}if(typeof Et[r]!="number")throw new Error("Bad segment: "+r);{const c={key:r,data:s};t.push(c),o+=i,a=n[o],r==="M"&&(r="L"),r==="m"&&(r="l")}}return t}function Br(e){let t=0,n=0,r=0,o=0;const a=[];for(const{key:i,data:s}of e)switch(i){case"M":a.push({key:"M",data:[...s]}),[t,n]=s,[r,o]=s;break;case"m":t+=s[0],n+=s[1],a.push({key:"M",data:[t,n]}),r=t,o=n;break;case"L":a.push({key:"L",data:[...s]}),[t,n]=s;break;case"l":t+=s[0],n+=s[1],a.push({key:"L",data:[t,n]});break;case"C":a.push({key:"C",data:[...s]}),t=s[4],n=s[5];break;case"c":{const c=s.map(((l,p)=>p%2?l+n:l+t));a.push({key:"C",data:c}),t=c[4],n=c[5];break}case"Q":a.push({key:"Q",data:[...s]}),t=s[2],n=s[3];break;case"q":{const c=s.map(((l,p)=>p%2?l+n:l+t));a.push({key:"Q",data:c}),t=c[2],n=c[3];break}case"A":a.push({key:"A",data:[...s]}),t=s[5],n=s[6];break;case"a":t+=s[5],n+=s[6],a.push({key:"A",data:[s[0],s[1],s[2],s[3],s[4],t,n]});break;case"H":a.push({key:"H",data:[...s]}),t=s[0];break;case"h":t+=s[0],a.push({key:"H",data:[t]});break;case"V":a.push({key:"V",data:[...s]}),n=s[0];break;case"v":n+=s[0],a.push({key:"V",data:[n]});break;case"S":a.push({key:"S",data:[...s]}),t=s[2],n=s[3];break;case"s":{const c=s.map(((l,p)=>p%2?l+n:l+t));a.push({key:"S",data:c}),t=c[2],n=c[3];break}case"T":a.push({key:"T",data:[...s]}),t=s[0],n=s[1];break;case"t":t+=s[0],n+=s[1],a.push({key:"T",data:[t,n]});break;case"Z":case"z":a.push({key:"Z",data:[]}),t=r,n=o}return a}function zr(e){const t=[];let n="",r=0,o=0,a=0,i=0,s=0,c=0;for(const{key:l,data:p}of e){switch(l){case"M":t.push({key:"M",data:[...p]}),[r,o]=p,[a,i]=p;break;case"C":t.push({key:"C",data:[...p]}),r=p[4],o=p[5],s=p[2],c=p[3];break;case"L":t.push({key:"L",data:[...p]}),[r,o]=p;break;case"H":r=p[0],t.push({key:"L",data:[r,o]});break;case"V":o=p[0],t.push({key:"L",data:[r,o]});break;case"S":{let h=0,d=0;n==="C"||n==="S"?(h=r+(r-s),d=o+(o-c)):(h=r,d=o),t.push({key:"C",data:[h,d,...p]}),s=p[0],c=p[1],r=p[2],o=p[3];break}case"T":{const[h,d]=p;let u=0,f=0;n==="Q"||n==="T"?(u=r+(r-s),f=o+(o-c)):(u=r,f=o);const m=r+2*(u-r)/3,g=o+2*(f-o)/3,b=h+2*(u-h)/3,_=d+2*(f-d)/3;t.push({key:"C",data:[m,g,b,_,h,d]}),s=u,c=f,r=h,o=d;break}case"Q":{const[h,d,u,f]=p,m=r+2*(h-r)/3,g=o+2*(d-o)/3,b=u+2*(h-u)/3,_=f+2*(d-f)/3;t.push({key:"C",data:[m,g,b,_,u,f]}),s=h,c=d,r=u,o=f;break}case"A":{const h=Math.abs(p[0]),d=Math.abs(p[1]),u=p[2],f=p[3],m=p[4],g=p[5],b=p[6];h===0||d===0?(t.push({key:"C",data:[r,o,g,b,g,b]}),r=g,o=b):(r!==g||o!==b)&&(Fr(r,o,g,b,h,d,u,f,m).forEach((function(_){t.push({key:"C",data:_})})),r=g,o=b);break}case"Z":t.push({key:"Z",data:[]}),r=a,o=i}n=l}return t}function at(e,t,n){return[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)]}function Fr(e,t,n,r,o,a,i,s,c,l){const p=(h=i,Math.PI*h/180);var h;let d=[],u=0,f=0,m=0,g=0;if(l)[u,f,m,g]=l;else{[e,t]=at(e,t,-p),[n,r]=at(n,r,-p);const K=(e-n)/2,q=(t-r)/2;let oe=K*K/(o*o)+q*q/(a*a);oe>1&&(oe=Math.sqrt(oe),o*=oe,a*=oe);const Ke=o*o,Ze=a*a,Up=Ke*Ze-Ke*q*q-Ze*K*K,jp=Ke*q*q+Ze*K*K,Da=(s===c?-1:1)*Math.sqrt(Math.abs(Up/jp));m=Da*o*q/a+(e+n)/2,g=Da*-a*K/o+(t+r)/2,u=Math.asin(parseFloat(((t-g)/a).toFixed(9))),f=Math.asin(parseFloat(((r-g)/a).toFixed(9))),e<m&&(u=Math.PI-u),n<m&&(f=Math.PI-f),u<0&&(u=2*Math.PI+u),f<0&&(f=2*Math.PI+f),c&&u>f&&(u-=2*Math.PI),!c&&f>u&&(f-=2*Math.PI)}let b=f-u;if(Math.abs(b)>120*Math.PI/180){const K=f,q=n,oe=r;f=c&&f>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,d=Fr(n=m+o*Math.cos(f),r=g+a*Math.sin(f),q,oe,o,a,i,0,c,[f,K,m,g])}b=f-u;const _=Math.cos(u),k=Math.sin(u),D=Math.cos(f),R=Math.sin(f),T=Math.tan(b/4),Y=4/3*o*T,re=4/3*a*T,un=[e,t],te=[e+Y*k,t-re*_],Ee=[n+Y*R,r-re*D],Na=[n,r];if(te[0]=2*un[0]-te[0],te[1]=2*un[1]-te[1],l)return[te,Ee,Na].concat(d);{d=[te,Ee,Na].concat(d);const K=[];for(let q=0;q<d.length;q+=3){const oe=at(d[q][0],d[q][1],p),Ke=at(d[q+1][0],d[q+1][1],p),Ze=at(d[q+2][0],d[q+2][1],p);K.push([oe[0],oe[1],Ke[0],Ke[1],Ze[0],Ze[1]])}return K}}const qs={randOffset:function(e,t){return w(e,t)},randOffsetWithRange:function(e,t,n){return Tt(e,t,n)},ellipse:function(e,t,n,r,o){const a=Ur(n,r,o);return Sn(e,t,o,a).opset},doubleLineOps:function(e,t,n,r,o){return de(e,t,n,r,o,!0)}};function Hr(e,t,n,r,o){return{type:"path",ops:de(e,t,n,r,o)}}function Lt(e,t,n){const r=(e||[]).length;if(r>2){const o=[];for(let a=0;a<r-1;a++)o.push(...de(e[a][0],e[a][1],e[a+1][0],e[a+1][1],n));return t&&o.push(...de(e[r-1][0],e[r-1][1],e[0][0],e[0][1],n)),{type:"path",ops:o}}return r===2?Hr(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:"path",ops:[]}}function Bs(e,t,n,r,o){return(function(a,i){return Lt(a,!0,i)})([[e,t],[e+n,t],[e+n,t+r],[e,t+r]],o)}function Wr(e,t){if(e.length){const n=typeof e[0][0]=="number"?[e]:e,r=Ct(n[0],1*(1+.2*t.roughness),t),o=t.disableMultiStroke?[]:Ct(n[0],1.5*(1+.22*t.roughness),Gr(t));for(let a=1;a<n.length;a++){const i=n[a];if(i.length){const s=Ct(i,1*(1+.2*t.roughness),t),c=t.disableMultiStroke?[]:Ct(i,1.5*(1+.22*t.roughness),Gr(t));for(const l of s)l.op!=="move"&&r.push(l);for(const l of c)l.op!=="move"&&o.push(l)}}return{type:"path",ops:r.concat(o)}}return{type:"path",ops:[]}}function Ur(e,t,n){const r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r)),a=2*Math.PI/o;let i=Math.abs(e/2),s=Math.abs(t/2);const c=1-n.curveFitting;return i+=w(i*c,n),s+=w(s*c,n),{increment:a,rx:i,ry:s}}function Sn(e,t,n,r){const[o,a]=Yr(r.increment,e,t,r.rx,r.ry,1,r.increment*Tt(.1,Tt(.4,1,n),n),n);let i=Pt(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[s]=Yr(r.increment,e,t,r.rx,r.ry,1.5,0,n),c=Pt(s,null,n);i=i.concat(c)}return{estimatedPoints:a,opset:{type:"path",ops:i}}}function jr(e,t,n,r,o,a,i,s,c){const l=e,p=t;let h=Math.abs(n/2),d=Math.abs(r/2);h+=w(.01*h,c),d+=w(.01*d,c);let u=o,f=a;for(;u<0;)u+=2*Math.PI,f+=2*Math.PI;f-u>2*Math.PI&&(u=0,f=2*Math.PI);const m=2*Math.PI/c.curveStepCount,g=Math.min(m/2,(f-u)/2),b=Kr(g,l,p,h,d,u,f,1,c);if(!c.disableMultiStroke){const _=Kr(g,l,p,h,d,u,f,1.5,c);b.push(..._)}return i&&(s?b.push(...de(l,p,l+h*Math.cos(u),p+d*Math.sin(u),c),...de(l,p,l+h*Math.cos(f),p+d*Math.sin(f),c)):b.push({op:"lineTo",data:[l,p]},{op:"lineTo",data:[l+h*Math.cos(u),p+d*Math.sin(u)]})),{type:"path",ops:b}}function Vr(e,t){const n=zr(Br($n(e))),r=[];let o=[0,0],a=[0,0];for(const{key:i,data:s}of n)switch(i){case"M":a=[s[0],s[1]],o=[s[0],s[1]];break;case"L":r.push(...de(a[0],a[1],s[0],s[1],t)),a=[s[0],s[1]];break;case"C":{const[c,l,p,h,d,u]=s;r.push(...zs(c,l,p,h,d,u,a,t)),a=[d,u];break}case"Z":r.push(...de(a[0],a[1],o[0],o[1],t)),a=[o[0],o[1]]}return{type:"path",ops:r}}function An(e,t){const n=[];for(const r of e)if(r.length){const o=t.maxRandomnessOffset||0,a=r.length;if(a>2){n.push({op:"move",data:[r[0][0]+w(o,t),r[0][1]+w(o,t)]});for(let i=1;i<a;i++)n.push({op:"lineTo",data:[r[i][0]+w(o,t),r[i][1]+w(o,t)]})}}return{type:"fillPath",ops:n}}function De(e,t){return(function(n,r){let o=n.fillStyle||"hachure";if(!G[o])switch(o){case"zigzag":G[o]||(G[o]=new Cs(r));break;case"cross-hatch":G[o]||(G[o]=new Ps(r));break;case"dots":G[o]||(G[o]=new Is(r));break;case"dashed":G[o]||(G[o]=new Os(r));break;case"zigzag-line":G[o]||(G[o]=new Rs(r));break;default:o="hachure",G[o]||(G[o]=new xn(r))}return G[o]})(t,qs).fillPolygons(e,t)}function Gr(e){const t=Object.assign({},e);return t.randomizer=void 0,e.seed&&(t.seed=e.seed+1),t}function Xr(e){return e.randomizer||(e.randomizer=new Ns(e.seed||0)),e.randomizer.next()}function Tt(e,t,n,r=1){return n.roughness*r*(Xr(n)*(t-e)+e)}function w(e,t,n=1){return Tt(-e,e,t,n)}function de(e,t,n,r,o,a=!1){const i=a?o.disableMultiStrokeFill:o.disableMultiStroke,s=Mn(e,t,n,r,o,!0,!1);if(i)return s;const c=Mn(e,t,n,r,o,!0,!0);return s.concat(c)}function Mn(e,t,n,r,o,a,i){const s=Math.pow(e-n,2)+Math.pow(t-r,2),c=Math.sqrt(s);let l=1;l=c<200?1:c>500?.4:-.0016668*c+1.233334;let p=o.maxRandomnessOffset||0;p*p*100>s&&(p=c/10);const h=p/2,d=.2+.2*Xr(o);let u=o.bowing*o.maxRandomnessOffset*(r-t)/200,f=o.bowing*o.maxRandomnessOffset*(e-n)/200;u=w(u,o,l),f=w(f,o,l);const m=[],g=()=>w(h,o,l),b=()=>w(p,o,l),_=o.preserveVertices;return i?m.push({op:"move",data:[e+(_?0:g()),t+(_?0:g())]}):m.push({op:"move",data:[e+(_?0:w(p,o,l)),t+(_?0:w(p,o,l))]}),i?m.push({op:"bcurveTo",data:[u+e+(n-e)*d+g(),f+t+(r-t)*d+g(),u+e+2*(n-e)*d+g(),f+t+2*(r-t)*d+g(),n+(_?0:g()),r+(_?0:g())]}):m.push({op:"bcurveTo",data:[u+e+(n-e)*d+b(),f+t+(r-t)*d+b(),u+e+2*(n-e)*d+b(),f+t+2*(r-t)*d+b(),n+(_?0:b()),r+(_?0:b())]}),m}function Ct(e,t,n){if(!e.length)return[];const r=[];r.push([e[0][0]+w(t,n),e[0][1]+w(t,n)]),r.push([e[0][0]+w(t,n),e[0][1]+w(t,n)]);for(let o=1;o<e.length;o++)r.push([e[o][0]+w(t,n),e[o][1]+w(t,n)]),o===e.length-1&&r.push([e[o][0]+w(t,n),e[o][1]+w(t,n)]);return Pt(r,null,n)}function Pt(e,t,n){const r=e.length,o=[];if(r>3){const a=[],i=1-n.curveTightness;o.push({op:"move",data:[e[1][0],e[1][1]]});for(let s=1;s+2<r;s++){const c=e[s];a[0]=[c[0],c[1]],a[1]=[c[0]+(i*e[s+1][0]-i*e[s-1][0])/6,c[1]+(i*e[s+1][1]-i*e[s-1][1])/6],a[2]=[e[s+1][0]+(i*e[s][0]-i*e[s+2][0])/6,e[s+1][1]+(i*e[s][1]-i*e[s+2][1])/6],a[3]=[e[s+1][0],e[s+1][1]],o.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else r===3?(o.push({op:"move",data:[e[1][0],e[1][1]]}),o.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):r===2&&o.push(...Mn(e[0][0],e[0][1],e[1][0],e[1][1],n,!0,!0));return o}function Yr(e,t,n,r,o,a,i,s){const c=[],l=[];if(s.roughness===0){e/=4,l.push([t+r*Math.cos(-e),n+o*Math.sin(-e)]);for(let p=0;p<=2*Math.PI;p+=e){const h=[t+r*Math.cos(p),n+o*Math.sin(p)];c.push(h),l.push(h)}l.push([t+r*Math.cos(0),n+o*Math.sin(0)]),l.push([t+r*Math.cos(e),n+o*Math.sin(e)])}else{const p=w(.5,s)-Math.PI/2;l.push([w(a,s)+t+.9*r*Math.cos(p-e),w(a,s)+n+.9*o*Math.sin(p-e)]);const h=2*Math.PI+p-.01;for(let d=p;d<h;d+=e){const u=[w(a,s)+t+r*Math.cos(d),w(a,s)+n+o*Math.sin(d)];c.push(u),l.push(u)}l.push([w(a,s)+t+r*Math.cos(p+2*Math.PI+.5*i),w(a,s)+n+o*Math.sin(p+2*Math.PI+.5*i)]),l.push([w(a,s)+t+.98*r*Math.cos(p+i),w(a,s)+n+.98*o*Math.sin(p+i)]),l.push([w(a,s)+t+.9*r*Math.cos(p+.5*i),w(a,s)+n+.9*o*Math.sin(p+.5*i)])}return[l,c]}function Kr(e,t,n,r,o,a,i,s,c){const l=a+w(.1,c),p=[];p.push([w(s,c)+t+.9*r*Math.cos(l-e),w(s,c)+n+.9*o*Math.sin(l-e)]);for(let h=l;h<=i;h+=e)p.push([w(s,c)+t+r*Math.cos(h),w(s,c)+n+o*Math.sin(h)]);return p.push([t+r*Math.cos(i),n+o*Math.sin(i)]),p.push([t+r*Math.cos(i),n+o*Math.sin(i)]),Pt(p,null,c)}function zs(e,t,n,r,o,a,i,s){const c=[],l=[s.maxRandomnessOffset||1,(s.maxRandomnessOffset||1)+.3];let p=[0,0];const h=s.disableMultiStroke?1:2,d=s.preserveVertices;for(let u=0;u<h;u++)u===0?c.push({op:"move",data:[i[0],i[1]]}):c.push({op:"move",data:[i[0]+(d?0:w(l[0],s)),i[1]+(d?0:w(l[0],s))]}),p=d?[o,a]:[o+w(l[u],s),a+w(l[u],s)],c.push({op:"bcurveTo",data:[e+w(l[u],s),t+w(l[u],s),n+w(l[u],s),r+w(l[u],s),p[0],p[1]]});return c}function st(e){return[...e]}function Zr(e,t=0){const n=e.length;if(n<3)throw new Error("A curve must have at least three points.");const r=[];if(n===3)r.push(st(e[0]),st(e[1]),st(e[2]),st(e[2]));else{const o=[];o.push(e[0],e[0]);for(let s=1;s<e.length;s++)o.push(e[s]),s===e.length-1&&o.push(e[s]);const a=[],i=1-t;r.push(st(o[0]));for(let s=1;s+2<o.length;s++){const c=o[s];a[0]=[c[0],c[1]],a[1]=[c[0]+(i*o[s+1][0]-i*o[s-1][0])/6,c[1]+(i*o[s+1][1]-i*o[s-1][1])/6],a[2]=[o[s+1][0]+(i*o[s][0]-i*o[s+2][0])/6,o[s+1][1]+(i*o[s][1]-i*o[s+2][1])/6],a[3]=[o[s+1][0],o[s+1][1]],r.push(a[1],a[2],a[3])}}return r}function It(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)}function Fs(e,t,n){const r=It(t,n);if(r===0)return It(e,t);let o=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/r;return o=Math.max(0,Math.min(1,o)),It(e,_e(t,n,o))}function _e(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]}function En(e,t,n,r){const o=r||[];if((function(s,c){const l=s[c+0],p=s[c+1],h=s[c+2],d=s[c+3];let u=3*p[0]-2*l[0]-d[0];u*=u;let f=3*p[1]-2*l[1]-d[1];f*=f;let m=3*h[0]-2*d[0]-l[0];m*=m;let g=3*h[1]-2*d[1]-l[1];return g*=g,u<m&&(u=m),f<g&&(f=g),u+f})(e,t)<n){const s=e[t+0];o.length?(a=o[o.length-1],i=s,Math.sqrt(It(a,i))>1&&o.push(s)):o.push(s),o.push(e[t+3])}else{const c=e[t+0],l=e[t+1],p=e[t+2],h=e[t+3],d=_e(c,l,.5),u=_e(l,p,.5),f=_e(p,h,.5),m=_e(d,u,.5),g=_e(u,f,.5),b=_e(m,g,.5);En([c,d,m,b],0,n,o),En([b,g,f,h],0,n,o)}var a,i;return o}function Hs(e,t){return Ot(e,0,e.length,t)}function Ot(e,t,n,r,o){const a=o||[],i=e[t],s=e[n-1];let c=0,l=1;for(let p=t+1;p<n-1;++p){const h=Fs(e[p],i,s);h>c&&(c=h,l=p)}return Math.sqrt(c)>r?(Ot(e,t,l+1,r,a),Ot(e,l,n,r,a)):(a.length||a.push(i),a.push(s)),a}function Ln(e,t=.15,n){const r=[],o=(e.length-1)/3;for(let a=0;a<o;a++)En(e,3*a,t,r);return n&&n>0?Ot(r,0,r.length,n):r}const X="none";class Rt{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,n,r){return{shape:t,sets:n||[],options:r||this.defaultOptions}}line(t,n,r,o,a){const i=this._o(a);return this._d("line",[Hr(t,n,r,o,i)],i)}rectangle(t,n,r,o,a){const i=this._o(a),s=[],c=Bs(t,n,r,o,i);if(i.fill){const l=[[t,n],[t+r,n],[t+r,n+o],[t,n+o]];i.fillStyle==="solid"?s.push(An([l],i)):s.push(De([l],i))}return i.stroke!==X&&s.push(c),this._d("rectangle",s,i)}ellipse(t,n,r,o,a){const i=this._o(a),s=[],c=Ur(r,o,i),l=Sn(t,n,i,c);if(i.fill)if(i.fillStyle==="solid"){const p=Sn(t,n,i,c).opset;p.type="fillPath",s.push(p)}else s.push(De([l.estimatedPoints],i));return i.stroke!==X&&s.push(l.opset),this._d("ellipse",s,i)}circle(t,n,r,o){const a=this.ellipse(t,n,r,r,o);return a.shape="circle",a}linearPath(t,n){const r=this._o(n);return this._d("linearPath",[Lt(t,!1,r)],r)}arc(t,n,r,o,a,i,s=!1,c){const l=this._o(c),p=[],h=jr(t,n,r,o,a,i,s,!0,l);if(s&&l.fill)if(l.fillStyle==="solid"){const d=Object.assign({},l);d.disableMultiStroke=!0;const u=jr(t,n,r,o,a,i,!0,!1,d);u.type="fillPath",p.push(u)}else p.push((function(d,u,f,m,g,b,_){const k=d,D=u;let R=Math.abs(f/2),T=Math.abs(m/2);R+=w(.01*R,_),T+=w(.01*T,_);let Y=g,re=b;for(;Y<0;)Y+=2*Math.PI,re+=2*Math.PI;re-Y>2*Math.PI&&(Y=0,re=2*Math.PI);const un=(re-Y)/_.curveStepCount,te=[];for(let Ee=Y;Ee<=re;Ee+=un)te.push([k+R*Math.cos(Ee),D+T*Math.sin(Ee)]);return te.push([k+R*Math.cos(re),D+T*Math.sin(re)]),te.push([k,D]),De([te],_)})(t,n,r,o,a,i,l));return l.stroke!==X&&p.push(h),this._d("arc",p,l)}curve(t,n){const r=this._o(n),o=[],a=Wr(t,r);if(r.fill&&r.fill!==X)if(r.fillStyle==="solid"){const i=Wr(t,Object.assign(Object.assign({},r),{disableMultiStroke:!0,roughness:r.roughness?r.roughness+r.fillShapeRoughnessGain:0}));o.push({type:"fillPath",ops:this._mergedShape(i.ops)})}else{const i=[],s=t;if(s.length){const c=typeof s[0][0]=="number"?[s]:s;for(const l of c)l.length<3?i.push(...l):l.length===3?i.push(...Ln(Zr([l[0],l[0],l[1],l[2]]),10,(1+r.roughness)/2)):i.push(...Ln(Zr(l),10,(1+r.roughness)/2))}i.length&&o.push(De([i],r))}return r.stroke!==X&&o.push(a),this._d("curve",o,r)}polygon(t,n){const r=this._o(n),o=[],a=Lt(t,!0,r);return r.fill&&(r.fillStyle==="solid"?o.push(An([t],r)):o.push(De([t],r))),r.stroke!==X&&o.push(a),this._d("polygon",o,r)}path(t,n){const r=this._o(n),o=[];if(!t)return this._d("path",o,r);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=r.fill&&r.fill!=="transparent"&&r.fill!==X,i=r.stroke!==X,s=!!(r.simplification&&r.simplification<1),c=(function(p,h,d){const u=zr(Br($n(p))),f=[];let m=[],g=[0,0],b=[];const _=()=>{b.length>=4&&m.push(...Ln(b,h)),b=[]},k=()=>{_(),m.length&&(f.push(m),m=[])};for(const{key:R,data:T}of u)switch(R){case"M":k(),g=[T[0],T[1]],m.push(g);break;case"L":_(),m.push([T[0],T[1]]);break;case"C":if(!b.length){const Y=m.length?m[m.length-1]:g;b.push([Y[0],Y[1]])}b.push([T[0],T[1]]),b.push([T[2],T[3]]),b.push([T[4],T[5]]);break;case"Z":_(),m.push([g[0],g[1]])}if(k(),!d)return f;const D=[];for(const R of f){const T=Hs(R,d);T.length&&D.push(T)}return D})(t,1,s?4-4*(r.simplification||1):(1+r.roughness)/2),l=Vr(t,r);if(a)if(r.fillStyle==="solid")if(c.length===1){const p=Vr(t,Object.assign(Object.assign({},r),{disableMultiStroke:!0,roughness:r.roughness?r.roughness+r.fillShapeRoughnessGain:0}));o.push({type:"fillPath",ops:this._mergedShape(p.ops)})}else o.push(An(c,r));else o.push(De(c,r));return i&&(s?c.forEach((p=>{o.push(Lt(p,!1,r))})):o.push(l)),this._d("path",o,r)}opsToPath(t,n){let r="";for(const o of t.ops){const a=typeof n=="number"&&n>=0?o.data.map((i=>+i.toFixed(n))):o.data;switch(o.op){case"move":r+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":r+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":r+=`L${a[0]} ${a[1]} `}}return r.trim()}toPaths(t){const n=t.sets||[],r=t.options||this.defaultOptions,o=[];for(const a of n){let i=null;switch(a.type){case"path":i={d:this.opsToPath(a),stroke:r.stroke,strokeWidth:r.strokeWidth,fill:X};break;case"fillPath":i={d:this.opsToPath(a),stroke:X,strokeWidth:0,fill:r.fill||X};break;case"fillSketch":i=this.fillSketch(a,r)}i&&o.push(i)}return o}fillSketch(t,n){let r=n.fillWeight;return r<0&&(r=n.strokeWidth/2),{d:this.opsToPath(t),stroke:n.fill||X,strokeWidth:r,fill:X}}_mergedShape(t){return t.filter(((n,r)=>r===0||n.op!=="move"))}}class Ws{constructor(t,n){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Rt(n)}draw(t){const n=t.sets||[],r=t.options||this.getDefaultOptions(),o=this.ctx,a=t.options.fixedDecimalPlaceDigits;for(const i of n)switch(i.type){case"path":o.save(),o.strokeStyle=r.stroke==="none"?"transparent":r.stroke,o.lineWidth=r.strokeWidth,r.strokeLineDash&&o.setLineDash(r.strokeLineDash),r.strokeLineDashOffset&&(o.lineDashOffset=r.strokeLineDashOffset),this._drawToContext(o,i,a),o.restore();break;case"fillPath":{o.save(),o.fillStyle=r.fill||"";const s=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(o,i,a,s),o.restore();break}case"fillSketch":this.fillSketch(o,i,r)}}fillSketch(t,n,r){let o=r.fillWeight;o<0&&(o=r.strokeWidth/2),t.save(),r.fillLineDash&&t.setLineDash(r.fillLineDash),r.fillLineDashOffset&&(t.lineDashOffset=r.fillLineDashOffset),t.strokeStyle=r.fill||"",t.lineWidth=o,this._drawToContext(t,n,r.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,n,r,o="nonzero"){t.beginPath();for(const a of n.ops){const i=typeof r=="number"&&r>=0?a.data.map((s=>+s.toFixed(r))):a.data;switch(a.op){case"move":t.moveTo(i[0],i[1]);break;case"bcurveTo":t.bezierCurveTo(i[0],i[1],i[2],i[3],i[4],i[5]);break;case"lineTo":t.lineTo(i[0],i[1])}}n.type==="fillPath"?t.fill(o):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,n,r,o,a){const i=this.gen.line(t,n,r,o,a);return this.draw(i),i}rectangle(t,n,r,o,a){const i=this.gen.rectangle(t,n,r,o,a);return this.draw(i),i}ellipse(t,n,r,o,a){const i=this.gen.ellipse(t,n,r,o,a);return this.draw(i),i}circle(t,n,r,o){const a=this.gen.circle(t,n,r,o);return this.draw(a),a}linearPath(t,n){const r=this.gen.linearPath(t,n);return this.draw(r),r}polygon(t,n){const r=this.gen.polygon(t,n);return this.draw(r),r}arc(t,n,r,o,a,i,s=!1,c){const l=this.gen.arc(t,n,r,o,a,i,s,c);return this.draw(l),l}curve(t,n){const r=this.gen.curve(t,n);return this.draw(r),r}path(t,n){const r=this.gen.path(t,n);return this.draw(r),r}}const Nt="http://www.w3.org/2000/svg";class Us{constructor(t,n){this.svg=t,this.gen=new Rt(n)}draw(t){const n=t.sets||[],r=t.options||this.getDefaultOptions(),o=this.svg.ownerDocument||window.document,a=o.createElementNS(Nt,"g"),i=t.options.fixedDecimalPlaceDigits;for(const s of n){let c=null;switch(s.type){case"path":c=o.createElementNS(Nt,"path"),c.setAttribute("d",this.opsToPath(s,i)),c.setAttribute("stroke",r.stroke),c.setAttribute("stroke-width",r.strokeWidth+""),c.setAttribute("fill","none"),r.strokeLineDash&&c.setAttribute("stroke-dasharray",r.strokeLineDash.join(" ").trim()),r.strokeLineDashOffset&&c.setAttribute("stroke-dashoffset",`${r.strokeLineDashOffset}`);break;case"fillPath":c=o.createElementNS(Nt,"path"),c.setAttribute("d",this.opsToPath(s,i)),c.setAttribute("stroke","none"),c.setAttribute("stroke-width","0"),c.setAttribute("fill",r.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||c.setAttribute("fill-rule","evenodd");break;case"fillSketch":c=this.fillSketch(o,s,r)}c&&a.appendChild(c)}return a}fillSketch(t,n,r){let o=r.fillWeight;o<0&&(o=r.strokeWidth/2);const a=t.createElementNS(Nt,"path");return a.setAttribute("d",this.opsToPath(n,r.fixedDecimalPlaceDigits)),a.setAttribute("stroke",r.fill||""),a.setAttribute("stroke-width",o+""),a.setAttribute("fill","none"),r.fillLineDash&&a.setAttribute("stroke-dasharray",r.fillLineDash.join(" ").trim()),r.fillLineDashOffset&&a.setAttribute("stroke-dashoffset",`${r.fillLineDashOffset}`),a}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,n){return this.gen.opsToPath(t,n)}line(t,n,r,o,a){const i=this.gen.line(t,n,r,o,a);return this.draw(i)}rectangle(t,n,r,o,a){const i=this.gen.rectangle(t,n,r,o,a);return this.draw(i)}ellipse(t,n,r,o,a){const i=this.gen.ellipse(t,n,r,o,a);return this.draw(i)}circle(t,n,r,o){const a=this.gen.circle(t,n,r,o);return this.draw(a)}linearPath(t,n){const r=this.gen.linearPath(t,n);return this.draw(r)}polygon(t,n){const r=this.gen.polygon(t,n);return this.draw(r)}arc(t,n,r,o,a,i,s=!1,c){const l=this.gen.arc(t,n,r,o,a,i,s,c);return this.draw(l)}curve(t,n){const r=this.gen.curve(t,n);return this.draw(r)}path(t,n){const r=this.gen.path(t,n);return this.draw(r)}}var js={canvas:(e,t)=>new Ws(e,t),svg:(e,t)=>new Us(e,t),generator:e=>new Rt(e),newSeed:()=>Rt.newSeed()};const Jr="data-wp-animations";function Vs(){if(document.head.querySelector(`[${Jr}]`))return;const e=document.createElement("style");e.setAttribute(Jr,"true"),e.textContent=`
    @keyframes wp-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes wp-slide-left {
      from { transform: translateX(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-right {
      from { transform: translateX(30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-up {
      from { transform: translateY(30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-down {
      from { transform: translateY(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-bounce {
      0% { transform: scale(0.3) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
      70% { transform: scale(0.95) rotate(var(--wp-final-rot, 0deg)); }
      100% { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); }
    }
    @keyframes wp-zoom {
      from { transform: scale(0) rotate(0deg); opacity: 0; }
      to { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    /* rotate effect — 720deg(2회전) 후 final rotate. */
    @keyframes wp-rotate {
      from { transform: rotate(0deg); opacity: 0; }
      to { transform: rotate(calc(720deg + var(--wp-final-rot, 0deg))); opacity: 1; }
    }
  `,document.head.appendChild(e)}function it(e,t,n){if(!t||t.kind==="none"||Er()!=="replay")return;const r=Math.max(50,t.durationMs||400),o=Math.max(0,t.delayMs||0);e.style.transformBox="fill-box",e.style.transformOrigin="center",e.style.setProperty("--wp-final-rot",`${n}deg`),e.style.animation=`wp-${t.kind} ${r}ms ease-out ${o}ms backwards`;const a=()=>{e.style.animation="",e.style.transformBox="",e.style.transformOrigin="",e.removeEventListener("animationend",a),e.removeEventListener("animationcancel",a)};e.addEventListener("animationend",a),e.addEventListener("animationcancel",a)}const Dt="http://www.w3.org/2000/svg",Qr="data-annotation-text",eo="data-annotation-arrow",to="data-annotation-shape",no="data-annotation-freedraw",E={host:null,svg:null,roughSvg:null,unsubscribe:null,unsubscribeMode:null};function Tn(e){var t;return((t=e.closest)==null?void 0:t.call(e,'[data-manuscript="ui"]'))!==null}function Gs(e,t){try{const n=Array.from(t.querySelectorAll(e.cssSelector)),r=[];for(const o of n)if(!Tn(o)&&(r.push(o),r.length>1))return null;return r[0]??null}catch{return null}}function Xs(e,t){return!e||!e.text?null:(e.parentSelector?Array.from(t.querySelectorAll(`${e.parentSelector} ${e.tagName}`)):Array.from(t.querySelectorAll(e.tagName))).find(r=>!Tn(r)&&(r.textContent??"").trim().includes(e.text))??null}function Ys(e,t){var s;if(!e||typeof t.elementFromPoint!="function")return null;const n=t.elementFromPoint(e.x+Math.floor(e.width/2),e.y+Math.floor(e.height/2));if(!(n instanceof HTMLElement)||Tn(n))return null;const r=n.getBoundingClientRect();if(!(Math.abs(r.width-e.width)<e.width*.5&&Math.abs(r.height-e.height)<e.height*.5))return null;if(e.nearbyText.length===0)return n;const a=(((s=n.parentElement)==null?void 0:s.textContent)??"").trim();return e.nearbyText.some(c=>a.includes(c))?n:null}function ro(e){var t;return((t=Cn(e))==null?void 0:t.el)??null}function Cn(e){const t=oo(e.framePath);if(!t)return null;const n=Gs(e.layer1,t);if(n)return{el:n,layer:1};const r=Xs(e.layer2,t);if(r)return{el:r,layer:2};const o=Ys(e.layer3,t);return o?{el:o,layer:3}:null}function oo(e){if(!e||e.length===0)return document;if(typeof window>"u")return null;let t=window;for(const n of e){const r=t.frames[n.index];if(!r)return null;t=r}try{return t.document}catch{return null}}function Q(){const e=ne();if(!e||!e.selectors)return null;try{const t=ro(e.selectors);return t?t.getBoundingClientRect():null}catch{return null}}function Ks(e,t){return e.anchorOffset&&t?{x:t.left+e.anchorOffset.x,y:t.top+e.anchorOffset.y}:e.position}function qt(e,t){return e.boundsAnchorOffset&&t?{x:t.left+e.boundsAnchorOffset.x,y:t.top+e.boundsAnchorOffset.y}:{x:e.bounds.x,y:e.bounds.y}}function Zs(e,t){const n=e.fromAnchorOffset&&t?{x:t.left+e.fromAnchorOffset.x,y:t.top+e.fromAnchorOffset.y}:e.from,r=e.toAnchorOffset&&t?{x:t.left+e.toAnchorOffset.x,y:t.top+e.toAnchorOffset.y}:e.to;return{from:n,to:r}}function Bt(e,t){return e.pointsAnchorOffset&&t&&e.pointsAnchorOffset.length===e.points.length?e.pointsAnchorOffset.map(n=>({x:t.left+n.x,y:t.top+n.y})):e.points}function Js(e,t){const{svg:n,roughSvg:r}=E;if(!n||!r)return;const o=ei(e.id),{from:a,to:i}=Zs(e,t);ao(e,s=>r.line(a.x,a.y,i.x,i.y,{roughness:1.5,bowing:1,seed:o,...s})),Qs(e,a,i,o+1)}function Qs(e,t,n,r){const{roughSvg:o}=E;if(!o)return;const a=Math.atan2(n.y-t.y,n.x-t.x),i=14+e.strokeWidth*2,s=Math.PI/7,c=n.x-i*Math.cos(a-s),l=n.y-i*Math.sin(a-s),p=n.x-i*Math.cos(a+s),h=n.y-i*Math.sin(a+s),d=`M ${c} ${l} L ${n.x} ${n.y} L ${p} ${h}`;ao(e,u=>o.path(d,{roughness:1.5,bowing:1,seed:r,...u}))}function ao(e,t){const{svg:n}=E;if(!n)return;const r=t({stroke:"#ffffff",strokeWidth:e.strokeWidth+4});r.setAttribute(eo,e.id),it(r,e.entryAnimation,0),n.appendChild(r);const o=t({stroke:e.color,strokeWidth:e.strokeWidth});o.setAttribute(eo,e.id),it(o,e.entryAnimation,0),n.appendChild(o)}function ei(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)|0;return Math.abs(t%1e5)}function so(e,t,n){const r=Math.floor(e/60%6),o=e/60-Math.floor(e/60),a=n*(1-t),i=n*(1-o*t),s=n*(1-(1-o)*t);let c=0,l=0,p=0;switch(r){case 0:c=n,l=s,p=a;break;case 1:c=i,l=n,p=a;break;case 2:c=a,l=n,p=s;break;case 3:c=a,l=i,p=n;break;case 4:c=s,l=a,p=n;break;case 5:c=n,l=a,p=i;break}return[Math.round(c*255),Math.round(l*255),Math.round(p*255)]}function io(e,t,n){const r=e/255,o=t/255,a=n/255,i=Math.max(r,o,a),s=Math.min(r,o,a),c=i-s;let l=0;return c!==0&&(i===r?l=(o-a)/c%6:i===o?l=(a-r)/c+2:l=(r-o)/c+4,l*=60,l<0&&(l+=360)),{h:l,s:i===0?0:c/i,v:i}}function co(e,t,n){return"#"+[e,t,n].map(r=>r.toString(16).padStart(2,"0")).join("")}function lo(e){let t=e.trim();if(!t.startsWith("#"))return{h:0,s:1,v:1};if(t=t.slice(1),t.length===3&&(t=t.split("").map(a=>a+a).join("")),t.length!==6)return{h:0,s:1,v:1};const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),o=parseInt(t.slice(4,6),16);return[n,r,o].some(a=>!Number.isFinite(a))?{h:0,s:1,v:1}:io(n,r,o)}function Pn(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(255,Math.round(t))):0}function po(e,t){let n=!1;e.addEventListener("mousedown",r=>{n=!0,t(r),r.preventDefault()}),document.addEventListener("mousemove",r=>{n&&t(r)}),document.addEventListener("mouseup",()=>{n=!1})}async function ti(e){let t;try{const n=window.top;t=n==null?void 0:n.EyeDropper}catch{}if(t||(t=window.EyeDropper),!t){console.info("[manuscript] EyeDropper API not available");return}try{const n=await new t().open();e(n.sRGBHex)}catch{}}const ni=`/* ─────────────────────────────────────────────────────────────
   Manuscript — Design tokens
   3 palettes (A Ink, B Graphite, C Sepia) + shared accents + type scale
   All colors authored in oklch for perceptual harmony.
   ───────────────────────────────────────────────────────────── */

:root {
  /* Type — Pretendard Variable single family, weight scale */
  --ff-sans: 'Pretendard Variable', Pretendard, -apple-system, 'Apple SD Gothic Neo',
             'Helvetica Neue', Arial, sans-serif;
  --ff-mono: ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  /* Classical serif — reserved for the brand wordmark. Renaissance Garamond
     reinforces the manuscript/manus-scriptus etymology. */
  --ff-serif: 'EB Garamond', 'Apple Garamond', Garamond, 'Times New Roman', serif;

  /* Scale (px) — Floating panel 작업 모드 기준. compact density.
     Body 14px가 최소; B2B 차분 톤에서 13/14가 표준.                  */
  --fs-display: 28px;  --lh-display: 1.2;  --fw-display: 600;
  --fs-h1:      20px;  --lh-h1:      1.3;  --fw-h1:      600;
  --fs-h2:      16px;  --lh-h2:      1.35; --fw-h2:      600;
  --fs-body:    14px;  --lh-body:    1.5;  --fw-body:    400;
  --fs-strong:  14px;  --lh-strong:  1.5;  --fw-strong:  500;
  --fs-small:   12px;  --lh-small:   1.45; --fw-small:   400;
  --fs-cap:     11px;  --lh-cap:     1.3;  --fw-cap:     600;
  --ls-cap:     0.08em;

  /* Radius + spacing — soft, document-like */
  --r-xs: 4px; --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-pill: 999px;
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04), 0 1px 1px rgb(0 0 0 / 0.03);
  --shadow-md: 0 2px 6px rgb(0 0 0 / 0.06), 0 1px 2px rgb(0 0 0 / 0.04);
  --shadow-lg: 0 12px 28px rgb(0 0 0 / 0.10), 0 4px 8px rgb(0 0 0 / 0.05);
  /* Apple-leaning layered shadow for elevated cards (active step, etc.).
     Per-palette overrides may tune this in tokens.css. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);

  /* ───── Functional accents (shared across all palettes) ───── */
  --c-success: oklch(0.52 0.09 150);
  --c-warning: oklch(0.66 0.10 75);
  --c-error:   oklch(0.52 0.14 27);
  --c-info:    oklch(0.50 0.08 245);

  /* ───── PALETTE A — INK (default) ─────
     Deep navy on warm paper. Most B2B-standard, archival voice. */
  --c-bg:        oklch(0.985 0.005 80);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 80);
  --c-text:      oklch(0.18  0.015 250);
  --c-text-mute: oklch(0.45  0.012 250);
  --c-text-soft: oklch(0.62  0.010 250);
  --c-border:    oklch(0.91  0.008 250);
  --c-border-strong: oklch(0.82 0.012 250);
  --c-primary:   oklch(0.30  0.045 250);
  --c-primary-h: oklch(0.22  0.050 250);
  --c-primary-fg: oklch(0.985 0.003 80);
  --c-tint:      oklch(0.93  0.020 250); /* selected step bg */
  --c-focus:     oklch(0.55  0.10  250); /* focus ring */
}

/* ───── PALETTE B — GRAPHITE ─────
   Near-black on bone. Calmest, monochrome. Maximum trust signal. */
[data-palette="graphite"] {
  --c-bg:        oklch(0.97  0.004 70);
  --c-surface:   oklch(0.995 0.003 70);
  --c-surface-2: oklch(0.94  0.005 70);
  --c-text:      oklch(0.16  0.005 60);
  --c-text-mute: oklch(0.46  0.006 60);
  --c-text-soft: oklch(0.62  0.005 60);
  --c-border:    oklch(0.90  0.006 70);
  --c-border-strong: oklch(0.80 0.008 70);
  --c-primary:   oklch(0.22  0.008 60);
  --c-primary-h: oklch(0.12  0     0);
  --c-primary-fg: oklch(0.98  0.003 70);
  --c-tint:      oklch(0.93  0.006 70);
  --c-focus:     oklch(0.50  0.010 60);
}

/* ───── PALETTE C — SEPIA ─────
   Parchment + oxblood. Strongest manuscript metaphor. */
[data-palette="sepia"] {
  --c-bg:        oklch(0.96  0.013 75);
  --c-surface:   oklch(0.99  0.007 80);
  --c-surface-2: oklch(0.935 0.018 75);
  --c-text:      oklch(0.22  0.020 40);
  --c-text-mute: oklch(0.48  0.022 40);
  --c-text-soft: oklch(0.62  0.018 50);
  --c-border:    oklch(0.88  0.020 65);
  --c-border-strong: oklch(0.78 0.025 60);
  --c-primary:   oklch(0.35  0.085 27);
  --c-primary-h: oklch(0.28  0.090 27);
  --c-primary-fg: oklch(0.985 0.008 80);
  --c-tint:      oklch(0.92  0.025 60);
  --c-focus:     oklch(0.50  0.10  30);
}

/* ───── PALETTE D — STUDIO ─────
   Cool snow + Apple-leaning blue. Subtle borders, depth via shadow.
   chroma stays within doctrine (≤0.09). */
[data-palette="studio"] {
  --c-bg:        oklch(0.985 0.005 240);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 240);
  --c-text:      oklch(0.20  0.020 240);
  --c-text-mute: oklch(0.50  0.015 240);
  --c-text-soft: oklch(0.66  0.010 240);
  --c-border:    oklch(0.92  0.008 240);
  --c-border-strong: oklch(0.84 0.010 240);
  --c-primary:   oklch(0.48  0.085 245);
  --c-primary-h: oklch(0.40  0.090 245);
  --c-primary-fg: oklch(0.99  0.003 240);
  --c-tint:      oklch(0.94  0.025 245);
  --c-focus:     oklch(0.60  0.13  245);

  /* Elevated-card shadow — softer + more layered than the default --shadow-md.
     Used on the active step in the floating panel. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);
}

/* ───── PALETTE E — STUDIO-DARK ─────
   Cool slate dark, mirrors PALETTE D STUDIO. See docs/design/dark-mode-design.md §4.1.
   Chroma ≤ 0.09 doctrine maintained (focus only allowed slight excess at 0.13). */
[data-palette="studio-dark"] {
  --c-bg:        oklch(0.16  0.012 245);
  --c-surface:   oklch(0.22  0.014 245);
  --c-surface-2: oklch(0.19  0.012 245);
  --c-text:      oklch(0.97  0.003 245);
  --c-text-mute: oklch(0.78  0.006 245);
  --c-text-soft: oklch(0.62  0.008 245);
  --c-border:    oklch(0.32  0.012 245);
  --c-border-strong: oklch(0.42 0.014 245);
  --c-primary:   oklch(0.70  0.09  245);
  --c-primary-h: oklch(0.78  0.09  245);
  --c-primary-fg: oklch(0.14  0.020 245);
  --c-tint:      oklch(0.32  0.045 245);
  --c-focus:     oklch(0.74  0.13  245);
}

/* ───── PALETTE F — INK-DARK ─────
   Warm-on-cool dark, mirrors PALETTE A INK. docs/design/dark-mode-design.md §4.2.
   Absorbs \`08.DARK-MODE-TOKENS.md\` §1 (spotlight-editor) and §2 (launcher pill) tones. */
[data-palette="ink-dark"] {
  --c-bg:        oklch(0.14  0.015 250);
  --c-surface:   oklch(0.20  0.018 250);
  --c-surface-2: oklch(0.17  0.016 250);
  --c-text:      oklch(0.98  0.003  80);
  --c-text-mute: oklch(0.76  0.006  80);
  --c-text-soft: oklch(0.60  0.008  80);
  --c-border:    oklch(0.30  0.014 250);
  --c-border-strong: oklch(0.40 0.016 250);
  --c-primary:   oklch(0.66  0.06  250);
  --c-primary-h: oklch(0.74  0.07  250);
  --c-primary-fg: oklch(0.14  0.018 250);
  --c-tint:      oklch(0.30  0.05  250);
  --c-focus:     oklch(0.70  0.10  250);
}

/* ───── Dark-palette shared overrides ─────
   Shadows: alpha ~4× because black-on-black shadow is weak; pair with
   surface-lightness steps (--c-bg < --c-surface-2 < --c-surface) for elevation.
   Functional accents: lightness ↑ for contrast on dark surface (L≈0.22). */
[data-palette$="-dark"] {
  --shadow-sm:   0 1px 2px  rgb(0 0 0 / 0.40);
  --shadow-md:   0 2px 6px  rgb(0 0 0 / 0.45), 0 1px 2px rgb(0 0 0 / 0.35);
  --shadow-lg:   0 12px 28px rgb(0 0 0 / 0.55), 0 4px 8px rgb(0 0 0 / 0.40);
  --shadow-card: 0 1px 2px  rgb(0 0 0 / 0.35),
                 0 4px 10px rgb(0 0 0 / 0.40),
                 0 12px 24px rgb(0 0 0 / 0.50);

  --c-success: oklch(0.66 0.10 150);
  --c-warning: oklch(0.78 0.11  75);
  --c-error:   oklch(0.66 0.15  27);
  --c-info:    oklch(0.66 0.09 245);
}

/* ───── Annotation color sets ─────
   Two curated 8-color sets the user picks from when authoring annotations.
   These are independent from the UI palette so the shell can be calm
   while annotations stay expressive (or both can be calm together).      */
:root {
  /* Vibrant — figma-style. Default for "강조 우선" 사용자. */
  --ann-vib-1: oklch(0.18 0.005 250);   /* ink black */
  --ann-vib-2: oklch(0.99 0     0);     /* paper white */
  --ann-vib-3: oklch(0.62 0.22  27);    /* red */
  --ann-vib-4: oklch(0.70 0.18 350);    /* pink */
  --ann-vib-5: oklch(0.60 0.16 145);    /* green */
  --ann-vib-6: oklch(0.55 0.18 250);    /* blue */
  --ann-vib-7: oklch(0.82 0.15  90);    /* yellow */
  --ann-vib-8: oklch(0.50 0.18 290);    /* purple */

  /* Muted — same 8 hues, chroma halved. B2B-friendly default. */
  --ann-mut-1: oklch(0.20 0.008 250);
  --ann-mut-2: oklch(0.99 0     0);
  --ann-mut-3: oklch(0.45 0.10  27);
  --ann-mut-4: oklch(0.50 0.09 350);
  --ann-mut-5: oklch(0.45 0.08 145);
  --ann-mut-6: oklch(0.42 0.09 250);
  --ann-mut-7: oklch(0.62 0.10  75);
  --ann-mut-8: oklch(0.42 0.08 290);
}

/* ───── Base ───── */
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--ff-sans);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--c-text);
  background: var(--c-bg);
  font-feature-settings: 'ss03', 'cv01';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }
`;function qe(){return ni.replace(/:root\s*\{/g,":host {").replace(/\[data-palette([^\]]*)\]\s*\{/g,":host([data-palette$1]) {")}const uo="studio",ri=["studio","ink","graphite","sepia","studio-dark","ink-dark"];function ho(e){return typeof e=="string"&&ri.includes(e)}function oi(e){return e.endsWith("-dark")}let ct=null;const In=new Set;let fo=!1;async function ai(){if(ct)return ct;try{const e=await W().get(U.palette);if(ho(e))return ct=e,e}catch{}return uo}function si(){return ct??uo}function ii(e){In.add(new WeakRef(e)),e.setAttribute("data-palette",si()),ai().then(t=>{e.isConnected&&e.setAttribute("data-palette",t)}),ci()}function ci(){if(!fo){fo=!0;try{W().subscribe([U.palette],(e,t)=>{ho(t)&&(ct=t,li(t))})}catch{}}}function li(e){for(const t of[...In]){const n=t.deref();n&&n.isConnected?(n.setAttribute("data-palette",e),pi(n,e)):In.delete(t)}}function pi(e,t){var r;const n=(r=e.shadowRoot)==null?void 0:r.querySelector('[data-region="palette-toggle"]');n&&n.setAttribute("aria-pressed",oi(t)?"true":"false")}const di=140,ui=140;function hi(){return`
    ${qe()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .picker {
      width: 240px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .top { display: flex; gap: 10px; }
    .sv {
      position: relative;
      flex: 1;
      height: ${di}px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      cursor: crosshair;
      overflow: hidden;
      user-select: none;
    }
    .sv-base { position: absolute; inset: 0; }
    .sv-white {
      position: absolute; inset: 0;
      background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
    }
    .sv-black {
      position: absolute; inset: 0;
      background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
    }
    .sv-cursor {
      position: absolute;
      width: 12px; height: 12px;
      border: 1.5px solid #ffffff;
      border-radius: 999px;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 1px rgb(0 0 0 / 0.35);
      pointer-events: none;
    }

    .hue {
      position: relative;
      width: 12px;
      height: ${ui}px;
      border-radius: 999px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      background: linear-gradient(
        to bottom,
        #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%
      );
      user-select: none;
    }
    .hue-cursor {
      position: absolute;
      left: 50%;
      width: 18px; height: 8px;
      border-radius: 4px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.12);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  `}function fi(){return`
    .actions { display: flex; align-items: center; gap: 6px; }
    .icon-btn {
      width: 28px; height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      background: var(--c-surface);
      color: var(--c-text);
      cursor: pointer;
      padding: 0;
      display: grid;
      place-items: center;
      transition: border-color 0.12s ease;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }
    .icon-btn:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .icon-btn svg { display: block; }
    .preview {
      flex: 1;
      height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border-strong);
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.12);
    }
    .confirm {
      border-color: var(--c-text);
      background: var(--c-text);
      color: var(--c-surface);
    }
    .confirm:hover {
      background: var(--c-primary);
      border-color: var(--c-primary);
      color: var(--c-primary-fg);
    }

    .rgb-wrap { display: flex; flex-direction: column; gap: 4px; }
    .rgb-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .modes { display: inline-flex; gap: 8px; }
    .modes .active { color: var(--c-text); }
    .hex-display {
      font-family: var(--ff-mono);
      font-size: 10px;
      letter-spacing: 0;
      color: var(--c-text-mute);
      text-transform: none;
    }
    .rgb { display: flex; gap: 8px; }
    .rgb-cell {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .rgb-cell input {
      width: 100%;
      height: 28px;
      padding: 0 8px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-mono);
      font-size: 12px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      text-align: center;
      line-height: 1;
      appearance: textfield;
    }
    .rgb-cell input:focus {
      outline: none;
      border-color: var(--c-focus);
    }
    .rgb-cell input::-webkit-outer-spin-button,
    .rgb-cell input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .rgb-cell label {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.10em;
      color: var(--c-text-soft);
      text-transform: uppercase;
      line-height: 1;
    }

    .recent { display: flex; flex-direction: column; gap: 6px; }
    .recent-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .recent-list { display: flex; gap: 4px; flex-wrap: wrap; }
    .recent-swatch {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      padding: 0;
      background: transparent;
    }
    .recent-swatch:hover { border-color: var(--c-border-strong); }
    .recent-swatch:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 1px;
    }
  `}function mi(){return[hi(),fi()].join(`
`)}function mo(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gi(e){return mo(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function V(e){return gi(e)}function _i(){return`
    <style>${mi()}</style>
    <div class="picker" role="dialog" aria-label="Custom color picker">
      ${bi()}
      ${yi()}
      ${vi()}
      ${xi()}
    </div>
  `}function bi(){return`
    <div class="top">
      <div class="sv" data-region="sv">
        <div class="sv-base" data-region="sv-base"></div>
        <div class="sv-white"></div>
        <div class="sv-black"></div>
        <div class="sv-cursor" data-region="sv-cursor"></div>
      </div>
      <div class="hue" data-region="hue">
        <div class="hue-cursor" data-region="hue-cursor"></div>
      </div>
    </div>
  `}function yi(){return`
    <div class="actions">
      <button type="button" class="icon-btn" data-action="eyedrop" title="Pick from page" aria-label="Eyedropper">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <g transform="rotate(45 8 8)">
            <path d="M 6 2 a 2 1.5 0 0 1 4 0 v 1.5 h -0.4 v 1 h 0.4 v 5.4 l -2 4.6 l -2 -4.6 v -5.4 h 0.4 v -1 h -0.4 z"/>
          </g>
        </svg>
      </button>
      <div class="preview" data-region="preview"></div>
      <button type="button" class="icon-btn confirm" data-action="confirm" title="Apply" aria-label="Confirm and apply color">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M 3.5 8.5 L 6.5 11.5 L 12.5 5"/>
        </svg>
      </button>
    </div>
  `}function vi(){return`
    <div class="rgb-wrap">
      <div class="rgb-head">
        <span class="modes">
          <span class="active">RGB</span>
          <span>HEX</span>
          <span>HSL</span>
        </span>
        <span class="hex-display" data-region="hex">#000000</span>
      </div>
      <div class="rgb">
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="r" aria-label="Red" />
          <label>R</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="g" aria-label="Green" />
          <label>G</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="b" aria-label="Blue" />
          <label>B</label>
        </div>
      </div>
    </div>
  `}function xi(){var a,i;const e=N(),t=((a=e==null?void 0:e.customColors)==null?void 0:a.text)??[],n=((i=e==null?void 0:e.customColors)==null?void 0:i.background)??[],r=Array.from(new Set([...t,...n])).slice(-7);return r.length===0?"":`
    <div class="recent" data-region="recent">
      <span class="recent-label">Recent</span>
      <div class="recent-list">${r.map(s=>`<button type="button" class="recent-swatch" data-action="recent" data-color="${V(s)}" style="background: ${V(s)}" aria-label="Use ${V(s)}" title="${V(s)}"></button>`).join("")}</div>
    </div>
  `}function wi(e,t){const n=t.getBoundingClientRect();e.style.top="0px",e.style.left="0px";const r=e.getBoundingClientRect();let o=n.bottom+8;o+r.height>window.innerHeight-8&&(o=n.top-r.height-8);let a=n.left;a+r.width>window.innerWidth-8&&(a=window.innerWidth-r.width-8),e.style.top=`${Math.max(8,o)}px`,e.style.left=`${Math.max(8,a)}px`}function be(){const e=document.createElement("div");e.setAttribute("data-manuscript","ui"),ii(e);const t=e.attachShadow({mode:"open"});return{host:e,shadow:t}}let ee=null,O=null,ue=0,ye=1,ve=1,he=null;function ki(e){xe(),he=e.onConfirm;const t=lo(e.initialColor);ue=t.h,ye=t.s,ve=t.v,{host:ee,shadow:O}=be(),ee.style.cssText=["position: fixed",`z-index: ${J+7}`,"pointer-events: auto"].join("; "),O.innerHTML=_i(),Si(),document.body.appendChild(ee),wi(ee,e.anchor),lt(),document.addEventListener("mousedown",bo,!0),document.addEventListener("keydown",yo,!0)}function xe(){ee&&(document.removeEventListener("mousedown",bo,!0),document.removeEventListener("keydown",yo,!0),ee.remove(),ee=null,O=null,he=null)}function $i(){return ee!==null}function lt(){if(!O)return;const e=O.querySelector('[data-region="sv-base"]');e&&(e.style.background=`hsl(${ue}deg, 100%, 50%)`);const t=O.querySelector('[data-region="sv-cursor"]');t&&(t.style.left=`${ye*100}%`,t.style.top=`${(1-ve)*100}%`);const n=O.querySelector('[data-region="hue-cursor"]');n&&(n.style.top=`${ue/360*100}%`);const[r,o,a]=so(ue,ye,ve),i=co(r,o,a),s=O.querySelector('[data-region="preview"]');s&&(s.style.background=`rgb(${r}, ${o}, ${a})`);const c=O.querySelector('[data-region="hex"]');c&&(c.textContent=i),O.querySelectorAll("[data-channel]").forEach(l=>{if(document.activeElement===ee&&O.activeElement===l)return;const p=l.dataset.channel;p==="r"?l.value=String(r):p==="g"?l.value=String(o):p==="b"&&(l.value=String(a))})}function go(){const[e,t,n]=so(ue,ye,ve);return co(e,t,n)}function Si(){if(!O)return;const e=O.querySelector('[data-region="sv"]');e&&po(e,n=>Ai(e,n));const t=O.querySelector('[data-region="hue"]');t&&po(t,n=>Mi(t,n)),O.addEventListener("input",n=>{var c,l,p;const r=n.target;if(!(r instanceof HTMLInputElement)||!r.dataset.channel)return;const o=Pn((c=O.querySelector('[data-channel="r"]'))==null?void 0:c.value),a=Pn((l=O.querySelector('[data-channel="g"]'))==null?void 0:l.value),i=Pn((p=O.querySelector('[data-channel="b"]'))==null?void 0:p.value),s=io(o,a,i);ue=s.h,ye=s.s,ve=s.v,lt()}),O.addEventListener("click",n=>{const r=n.target;if(!(r instanceof Element))return;const o=r.closest("[data-action]"),a=o==null?void 0:o.getAttribute("data-action");if(a==="confirm")he==null||he(go()),xe();else if(a==="eyedrop")ti(_o);else if(a==="recent"){const i=o==null?void 0:o.getAttribute("data-color");i&&_o(i)}})}function _o(e){const t=lo(e);ue=t.h,ye=t.s,ve=t.v,lt()}function Ai(e,t){const n=e.getBoundingClientRect();ye=Math.max(0,Math.min(1,(t.clientX-n.left)/n.width)),ve=Math.max(0,Math.min(1,1-(t.clientY-n.top)/n.height)),lt()}function Mi(e,t){const n=e.getBoundingClientRect();ue=Math.max(0,Math.min(1,(t.clientY-n.top)/n.height))*360,lt()}function bo(e){if(!ee)return;const t=e.target;t instanceof HTMLElement&&ee.contains(t)||xe()}function yo(e){e.key==="Escape"?(e.preventDefault(),xe()):e.key==="Enter"&&(e.preventDefault(),he==null||he(go()),xe())}const zt=8,Be=6,vo=32,xo=16,Ft=4,wo=[{name:"nw",cursor:"nwse-resize",offset:e=>({x:e.x,y:e.y})},{name:"n",cursor:"ns-resize",offset:e=>({x:e.x+e.width/2,y:e.y})},{name:"ne",cursor:"nesw-resize",offset:e=>({x:e.x+e.width,y:e.y})},{name:"e",cursor:"ew-resize",offset:e=>({x:e.x+e.width,y:e.y+e.height/2})},{name:"se",cursor:"nwse-resize",offset:e=>({x:e.x+e.width,y:e.y+e.height})},{name:"s",cursor:"ns-resize",offset:e=>({x:e.x+e.width/2,y:e.y+e.height})},{name:"sw",cursor:"nesw-resize",offset:e=>({x:e.x,y:e.y+e.height})},{name:"w",cursor:"ew-resize",offset:e=>({x:e.x,y:e.y+e.height/2})}];function ko(e,t,n,r){let{x:o,y:a,width:i,height:s}=t;return e==="nw"||e==="w"||e==="sw"?(o+=n,i-=n):(e==="ne"||e==="e"||e==="se")&&(i+=n),e==="nw"||e==="n"||e==="ne"?(a+=r,s-=r):(e==="sw"||e==="s"||e==="se")&&(s+=r),i<Be&&(o=t.x+t.width-Be,i=Be),s<Be&&(a=t.y+t.height-Be,s=Be),{x:o,y:a,width:i,height:s}}function $o(e){if(e.length===0)return null;let t=1/0,n=1/0,r=-1/0,o=-1/0;for(const a of e)a.x<t&&(t=a.x),a.y<n&&(n=a.y),a.x>r&&(r=a.x),a.y>o&&(o=a.y);return{x:t,y:n,width:r-t,height:o-n}}function Ei(e){const t=document.querySelector(`[data-annotation-text="${e}"]`);if(!t)return null;const n=t.getBoundingClientRect();return{x:n.left,y:n.top,width:n.width,height:n.height}}const S={host:null,activeId:null,activeMode:"shape",dragState:null,unsubscribeScenario:null},P="http://www.w3.org/2000/svg";function So(e){if(!e.bounds)return e;const t=Q();return t?{...e,boundsAnchorOffset:{x:e.bounds.x-t.left,y:e.bounds.y-t.top}}:{...e,boundsAnchorOffset:void 0}}function Li(e){if(!e.points)return e;const t=Q();return t?{...e,pointsAnchorOffset:e.points.map(n=>({x:n.x-t.left,y:n.y-t.top}))}:{...e,pointsAnchorOffset:void 0}}function Ti(){document.removeEventListener("mousemove",On,!0),document.removeEventListener("mouseup",Rn,!0),document.removeEventListener("keydown",Mo,!0)}function Ci(){document.addEventListener("keydown",Mo,!0)}function Pi(e,t){if(!S.activeId)return;e.stopPropagation(),e.preventDefault();const n=M(S.activeId);if(!n||n.kind!=="shape")return;const r=qt(n,Q());S.dragState={kind:"resize",handle:t,startMouse:{x:e.clientX,y:e.clientY},startBounds:{...n.bounds,x:r.x,y:r.y}},Ht()}function Ii(e){if(!S.activeId)return;e.stopPropagation(),e.preventDefault();const t=M(S.activeId);if(!t||t.kind!=="shape")return;const n=t.bounds.x+t.bounds.width/2,r=t.bounds.y+t.bounds.height/2,o=Math.atan2(e.clientY-r,e.clientX-n)*180/Math.PI;S.dragState={kind:"rotate",center:{x:n,y:r},startMouseAngle:o,startRotation:t.rotate??0},Ht()}function Ao(e,t){if(!S.activeId)return;e.stopPropagation(),e.preventDefault();const n=M(S.activeId);if(!n)return;const r=t(),o=Math.atan2(e.clientY-r.y,e.clientX-r.x)*180/Math.PI,a=n.kind==="shape"||n.kind==="freedraw"||n.kind==="text"?n.rotate??0:0;S.dragState={kind:"rotate",center:r,startMouseAngle:o,startRotation:a},Ht()}function Oi(e,t){if(!S.activeId)return;e.stopPropagation(),e.preventDefault();const n=M(S.activeId);if(!n||n.kind!=="freedraw")return;const r=Bt(n,Q()),o=$o(r);!o||o.width===0||o.height===0||(S.dragState={kind:"freedraw-resize",handle:t,startMouse:{x:e.clientX,y:e.clientY},startBounds:{...o},startPoints:r.map(a=>({...a}))},Ht())}function Ht(){Ie("handle-drag"),document.addEventListener("mousemove",On,!0),document.addEventListener("mouseup",Rn,!0)}function On(e){const{activeId:t,dragState:n}=S;if(!t||!n)return;e.preventDefault();const r=M(t);if(!r)return;const o=n.kind!=="rotate"?e.clientX-n.startMouse.x:0,a=n.kind!=="rotate"?e.clientY-n.startMouse.y:0;if(n.kind==="resize"&&r.kind==="shape"){const i=ko(n.handle,n.startBounds,o,a);L(t,So({bounds:i}))}else if(n.kind==="freedraw-resize"&&r.kind==="freedraw"){const i=n.startBounds,s=ko(n.handle,i,o,a),c=i.width===0?1:s.width/i.width,l=i.height===0?1:s.height/i.height,p=n.startPoints.map(h=>({x:s.x+(h.x-i.x)*c,y:s.y+(h.y-i.y)*l}));L(t,Li({points:p}))}else if(n.kind==="rotate"){const i=Math.atan2(e.clientY-n.center.y,e.clientX-n.center.x)*180/Math.PI;let s=(n.startRotation+(i-n.startMouseAngle))%360;s<0&&(s+=360),r.kind==="shape"?L(t,{rotate:s}):r.kind==="freedraw"?L(t,{rotate:s}):r.kind==="text"&&L(t,{rotate:s})}}function Rn(){document.removeEventListener("mousemove",On,!0),document.removeEventListener("mouseup",Rn,!0),S.dragState=null,Oe()}function Mo(e){var o;const{activeId:t}=S;if(!t)return;const n=(o=e.target)==null?void 0:o.tagName;if(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")return;const r=document.activeElement;if(!(r!=null&&r.isContentEditable)){if(e.key==="Delete"||e.key==="Backspace"){e.preventDefault(),Ar(t);return}if(e.key.startsWith("Arrow")){const a=M(t);if(!a||a.kind!=="shape")return;const i=e.shiftKey?10:1,s=e.key==="ArrowLeft"?-i:e.key==="ArrowRight"?i:0,c=e.key==="ArrowUp"?-i:e.key==="ArrowDown"?i:0;if(s!==0||c!==0){e.preventDefault();const l=qt(a,Q());L(t,So({bounds:{...a.bounds,x:l.x+s,y:l.y+c}}))}}}}function Eo(e,t,n,r,o){const a=document.createElementNS(P,"rect");return a.setAttribute("x",String(e-zt/2)),a.setAttribute("y",String(t-zt/2)),a.setAttribute("width",String(zt)),a.setAttribute("height",String(zt)),a.setAttribute("fill","oklch(1 0 0)"),a.setAttribute("stroke","oklch(0.48 0.085 245)"),a.setAttribute("stroke-width","2"),a.style.cursor=r,a.style.pointerEvents="auto",a.setAttribute("pointer-events","all"),a.addEventListener("mousedown",i=>o(i,n)),a}function Lo(e,t,n){const r=document.createElementNS(P,"g"),o=t-18,a=t-vo,i=12,s=document.createElementNS(P,"line");s.setAttribute("x1",String(e)),s.setAttribute("y1",String(t)),s.setAttribute("x2",String(e)),s.setAttribute("y2",String(o)),s.setAttribute("stroke","oklch(0.48 0.085 245)"),s.setAttribute("stroke-width","1"),s.setAttribute("stroke-dasharray","2 3"),s.style.pointerEvents="none",r.appendChild(s);const c=document.createElementNS(P,"circle");c.setAttribute("cx",String(e)),c.setAttribute("cy",String(a+1)),c.setAttribute("r",String(i)),c.setAttribute("fill","rgba(0,0,0,0.04)"),c.style.pointerEvents="none",r.appendChild(c);const l=document.createElementNS(P,"circle");l.setAttribute("cx",String(e)),l.setAttribute("cy",String(a)),l.setAttribute("r",String(i)),l.setAttribute("fill","oklch(1 0 0)"),l.setAttribute("stroke","oklch(0.48 0.085 245)"),l.setAttribute("stroke-width","1"),l.style.cursor="grab",l.setAttribute("pointer-events","all"),r.appendChild(l);const p=e-8,h=a-8,d=document.createElementNS(P,"path");d.setAttribute("d",`M ${p+4} ${h+11} A 5 5 0 1 1 ${p+11} ${h+4}`),d.setAttribute("fill","none"),d.setAttribute("stroke","oklch(0.48 0.085 245)"),d.setAttribute("stroke-width","1.5"),d.setAttribute("stroke-linecap","round"),d.setAttribute("stroke-linejoin","round"),d.style.pointerEvents="none",r.appendChild(d);const u=document.createElementNS(P,"path");return u.setAttribute("d",`M ${p+11} ${h+1.5} L ${p+14} ${h+4} L ${p+11} ${h+6.5} Z`),u.setAttribute("fill","oklch(0.48 0.085 245)"),u.setAttribute("stroke","oklch(0.48 0.085 245)"),u.setAttribute("stroke-width","1.5"),u.setAttribute("stroke-linejoin","round"),u.style.pointerEvents="none",r.appendChild(u),l.addEventListener("mousedown",f=>n(f)),r}function Nn(e,t){const n=document.createElementNS(P,"g"),r=e.x-xo,o=e.y-xo;return n.appendChild(Ri(r,o,t)),n}function Ri(e,t,n){const r=document.createElementNS(P,"g");r.style.cursor="pointer",r.style.pointerEvents="auto",r.setAttribute("pointer-events","all");const o=document.createElementNS(P,"circle");o.setAttribute("cx",String(e)),o.setAttribute("cy",String(t+1)),o.setAttribute("r","12"),o.setAttribute("fill","rgba(0,0,0,0.04)"),o.style.pointerEvents="none",r.appendChild(o);const a=document.createElementNS(P,"circle");a.setAttribute("cx",String(e)),a.setAttribute("cy",String(t)),a.setAttribute("r","12"),a.setAttribute("fill","oklch(1 0 0)"),a.setAttribute("stroke","oklch(0.92 0.008 240)"),a.setAttribute("stroke-width","1"),r.appendChild(a);const i=e-6,s=t-6,c=document.createElementNS(P,"path");return c.setAttribute("d",[`M ${i+1.5} ${s+3.5} L ${i+10.5} ${s+3.5}`,`M ${i+4.5} ${s+3.5} L ${i+4.5} ${s+2} L ${i+7.5} ${s+2} L ${i+7.5} ${s+3.5}`,`M ${i+3} ${s+3.5} L ${i+3.5} ${s+10.5} A 0.8 0.8 0 0 0 ${i+4.3} ${s+11} L ${i+7.7} ${s+11} A 0.8 0.8 0 0 0 ${i+8.5} ${s+10.5} L ${i+9} ${s+3.5}`].join(" ")),c.setAttribute("fill","none"),c.setAttribute("stroke","oklch(0.50 0.015 240)"),c.setAttribute("stroke-width","1.2"),c.setAttribute("stroke-linecap","round"),c.setAttribute("stroke-linejoin","round"),c.style.pointerEvents="none",r.appendChild(c),r.addEventListener("mousedown",l=>{l.stopPropagation(),l.preventDefault(),n()}),r}function Dn(e){const t=document.createElementNS(P,"rect");return t.setAttribute("x",String(e.x)),t.setAttribute("y",String(e.y)),t.setAttribute("width",String(e.width)),t.setAttribute("height",String(e.height)),t.setAttribute("fill","none"),t.setAttribute("stroke","oklch(0.48 0.085 245)"),t.setAttribute("stroke-width","1"),t.setAttribute("stroke-dasharray","4 3"),t}function Wt(){const{host:e,activeId:t,activeMode:n}=S;if(!e||!t)return;for(;e.firstChild;)e.removeChild(e.firstChild);const r=M(t);if(!r){Bn();return}if(n==="freedraw"&&r.kind==="freedraw"){Bi(e,r);return}if(n==="text"&&r.kind==="text"){qi(e,r);return}if(r.kind!=="shape"){Bn();return}Ni(e,r)}function Ni(e,t){const n=qt(t,Q()),r={...t.bounds,x:n.x,y:n.y},o=t.rotate??0,a=r.x+r.width/2,i=r.y+r.height/2,s=document.createElementNS(P,"g");o&&s.setAttribute("transform",`rotate(${o} ${a} ${i})`),s.appendChild(Dn(r));for(const c of wo){const{x:l,y:p}=c.offset(r);s.appendChild(Eo(l,p,c.name,c.cursor,Pi))}s.appendChild(Di(r)),e.appendChild(s),e.appendChild(Nn(r,qn))}function Di(e){const t=e.x+e.width/2,n=e.y-vo,r=document.createElementNS(P,"g"),o=document.createElementNS(P,"line");o.setAttribute("x1",String(t)),o.setAttribute("y1",String(e.y)),o.setAttribute("x2",String(t)),o.setAttribute("y2",String(n)),o.setAttribute("stroke","oklch(0.48 0.085 245)"),o.setAttribute("stroke-width","1"),r.appendChild(o);const a=document.createElementNS(P,"g");a.style.cursor="grab",a.style.pointerEvents="auto",a.setAttribute("pointer-events","all");const i=document.createElementNS(P,"circle");i.setAttribute("cx",String(t)),i.setAttribute("cy",String(n)),i.setAttribute("r","9"),i.setAttribute("fill","oklch(1 0 0)"),i.setAttribute("stroke","oklch(0.48 0.085 245)"),i.setAttribute("stroke-width","2"),a.appendChild(i);const s=document.createElementNS(P,"path");return s.setAttribute("d",`M ${t-4} ${n-1} A 4 4 0 1 1 ${t+3} ${n+2} M ${t+1} ${n-1} L ${t+3} ${n+2} L ${t+5} ${n-1}`),s.setAttribute("fill","none"),s.setAttribute("stroke","oklch(0.48 0.085 245)"),s.setAttribute("stroke-width","1.4"),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),s.style.pointerEvents="none",a.appendChild(s),a.addEventListener("mousedown",c=>Ii(c)),r.appendChild(a),r}function qi(e,t){const n=Ei(t.id);if(!n)return;const r=To(n),o=r.x+r.width/2,a=r.y+r.height/2;e.appendChild(Dn(r)),e.appendChild(Lo(o,r.y,i=>Ao(i,()=>({x:o,y:a})))),e.appendChild(Nn(r,qn))}function Bi(e,t){const n=Bt(t,Q()),r=$o(n);if(!r)return;const o=To(r),a=o.x+o.width/2,i=o.y+o.height/2;e.appendChild(Dn(o));for(const s of wo){if(s.name!=="nw"&&s.name!=="ne"&&s.name!=="sw"&&s.name!=="se")continue;const{x:c,y:l}=s.offset(o);e.appendChild(Eo(c,l,s.name,s.cursor,Oi))}e.appendChild(Lo(a,o.y,s=>Ao(s,()=>({x:a,y:i})))),e.appendChild(Nn(o,qn))}function To(e){return{x:e.x-Ft,y:e.y-Ft,width:e.width+Ft*2,height:e.height+Ft*2}}function qn(){const e=S.activeId;e&&Ar(e)}function zi(e){const t=M(e);if(!t)return;const n=t.entryAnimation;if(!n||n.kind==="none")return;const o={text:`[data-annotation-text="${e}"]`,shape:`[data-annotation-shape="${e}"]`,freedraw:`[data-annotation-freedraw="${e}"]`,arrow:`[data-annotation-arrow="${e}"]`}[t.kind];if(!o)return;const a=document.querySelectorAll(o);if(a.length===0)return;const i=t.kind==="shape"||t.kind==="freedraw"||t.kind==="text"?t.rotate??0:0;a.forEach(s=>{s.style.animation=""}),a[0].getBoundingClientRect(),a.forEach(s=>{s.style.transformBox="fill-box",s.style.transformOrigin="center",s.style.setProperty("--wp-final-rot",`${i}deg`),s.style.animation=`wp-${n.kind} ${Math.max(50,n.durationMs)}ms ease-out backwards`;const c=()=>{s.style.animation="",s.style.transformBox="",s.style.transformOrigin="",s.removeEventListener("animationend",c),s.removeEventListener("animationcancel",c)};s.addEventListener("animationend",c),s.addEventListener("animationcancel",c)})}function Fi(e){const t=M(e);!t||t.kind!=="shape"||(S.activeId=e,S.activeMode="shape",zn(),Wt())}function Hi(e){const t=M(e);!t||t.kind!=="freedraw"||(S.activeId=e,S.activeMode="freedraw",zn(),Wt())}function Wi(e){const t=M(e);!t||t.kind!=="text"||(S.activeId=e,S.activeMode="text",zn(),Wt())}function Bn(){var e;S.host&&(Ti(),(e=S.unsubscribeScenario)==null||e.call(S),S.unsubscribeScenario=null,S.host.remove(),S.host=null,S.activeId=null,S.activeMode="shape",S.dragState=null)}function Ui(e){return S.host!==null&&e!==null&&S.host.contains(e)}function zn(){if(S.host)return;const e=document.createElementNS(P,"svg");e.setAttribute("data-manuscript","ui"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.style.cssText=["position: fixed","top: 0","left: 0","width: 100vw","height: 100vh","pointer-events: none",`z-index: ${J+4}`,"overflow: visible"].join("; "),document.body.appendChild(e),S.host=e,Ci(),S.unsubscribeScenario=Te(Wt)}function ji(e){switch(e.kind){case"text":return{style:{...e.style},entryAnimation:e.entryAnimation};case"shape":return{fill:e.fill,stroke:e.stroke,strokeWidth:e.strokeWidth,fillOpacity:e.fillOpacity,entryAnimation:e.entryAnimation};case"arrow":return{color:e.color,strokeWidth:e.strokeWidth,entryAnimation:e.entryAnimation};case"freedraw":return{stroke:e.stroke,strokeWidth:e.strokeWidth,strokeOpacity:e.strokeOpacity,entryAnimation:e.entryAnimation}}}const Vi=400,Gi=0;function Xi(e){return{kind:e,durationMs:Vi,delayMs:Gi}}function Yi(e){var t;return((t=e.entryAnimation)==null?void 0:t.kind)??"none"}const Co=10,Ki=46,Po=12,Io=36,Oo=0,Ro=20,No=[{token:"var(--ann-mut-1)",resolved:"oklch(0.20 0.008 250)"},{token:"var(--ann-mut-2)",resolved:"oklch(0.99 0 0)"},{token:"var(--ann-mut-3)",resolved:"oklch(0.45 0.10 27)"},{token:"var(--ann-mut-4)",resolved:"oklch(0.50 0.09 350)"},{token:"var(--ann-mut-5)",resolved:"oklch(0.45 0.08 145)"},{token:"var(--ann-mut-6)",resolved:"oklch(0.42 0.09 250)"},{token:"var(--ann-mut-7)",resolved:"oklch(0.62 0.10 75)"},{token:"var(--ann-mut-8)",resolved:"oklch(0.42 0.08 290)"}],Do=[{token:"var(--ann-vib-1)",resolved:"oklch(0.18 0.005 250)"},{token:"var(--ann-vib-2)",resolved:"oklch(0.99 0 0)"},{token:"var(--ann-vib-3)",resolved:"oklch(0.62 0.22 27)"},{token:"var(--ann-vib-4)",resolved:"oklch(0.70 0.18 350)"},{token:"var(--ann-vib-5)",resolved:"oklch(0.60 0.16 145)"},{token:"var(--ann-vib-6)",resolved:"oklch(0.55 0.18 250)"},{token:"var(--ann-vib-7)",resolved:"oklch(0.82 0.15 90)"},{token:"var(--ann-vib-8)",resolved:"oklch(0.50 0.18 290)"}],qo=[{label:"Sans",value:"'Pretendard Variable', Pretendard, system-ui, sans-serif"},{label:"Serif",value:"'EB Garamond', Georgia, serif"},{label:"Mono",value:"ui-monospace, monospace"}];function Zi(e){return!e||e.length===0?[...qo]:[...e.map(t=>({label:is(t),value:t})),...qo]}const Ji=[{value:"none",label:"None"},{value:"fade",label:"Fade"},{value:"slide-left",label:"Slide →"},{value:"slide-right",label:"Slide ←"},{value:"slide-up",label:"Slide ↑"},{value:"slide-down",label:"Slide ↓"},{value:"bounce",label:"Bounce"},{value:"zoom",label:"Zoom"},{value:"rotate",label:"Rotate (2×)"}],$={host:null,shadow:null,activeId:null,activeKind:null,activeAnchorSelector:null,swatchMode:"muted",unsubscribeScenario:null};function Bo(e){const t=$.activeId;if(!t)return;const n=M(t);n&&(n.kind==="text"?L(t,{style:{...n.style,color:e}}):n.kind==="shape"?L(t,{stroke:e}):n.kind==="freedraw"&&L(t,{stroke:e}))}function zo(e){const t=$.activeId;if(!t)return;const n=M(t);n&&(n.kind==="text"?L(t,{style:{...n.style,backgroundColor:e}}):n.kind==="shape"&&L(t,{fill:e}))}function Fo(e){const t=$.activeId;if(!t)return;const n=M(t);!n||n.kind!=="text"||L(t,{style:{...n.style,borderColor:e}})}function Qi(e){const t=$.activeId;if(!t)return;const n=M(t);!n||n.kind!=="text"||L(t,{style:{...n.style,fontFamily:e}})}function ec(e){const t=$.activeId;if(!t)return;const n=M(t);!n||n.kind!=="text"||L(t,{style:{...n.style,fontSize:e}})}function tc(){const e=$.activeId;if(!e)return;const t=M(e);!t||t.kind!=="text"||L(e,{style:{...t.style,bold:!t.style.bold}})}function nc(){const e=$.activeId;if(!e)return;const t=M(e);!t||t.kind!=="text"||L(e,{style:{...t.style,italic:t.style.italic!==!0}})}function rc(e){const t=$.activeId;t&&L(t,{entryAnimation:e==="none"?void 0:Xi(e)})}function oc(e){const t=$.activeId;if(!t)return;const n=M(t);if(!n)return;const r=Math.max(0,Math.min(1,e));n.kind==="text"?L(t,{style:{...n.style,backgroundOpacity:r}}):n.kind==="shape"?L(t,{fillOpacity:r}):n.kind==="freedraw"&&L(t,{strokeOpacity:r})}function ac(e){const t=$.activeId;if(!t)return;const n=M(t);n&&(n.kind==="shape"?L(t,{strokeWidth:e}):n.kind==="freedraw"&&L(t,{strokeWidth:e}))}function sc(){const{shadow:e}=$;if(!e)return;const t=e.querySelector('[data-region="alpha-track"]'),n=e.querySelector('[data-region="alpha-thumb"]');if(!t||!n)return;let r=!1;const o=i=>{r&&Fn(t,i.clientX)},a=()=>{r=!1,document.removeEventListener("mousemove",o,!0),document.removeEventListener("mouseup",a,!0),Oe()};n.addEventListener("mousedown",i=>{Ie("alpha"),r=!0,Fn(t,i.clientX),document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0),i.preventDefault()}),t.addEventListener("mousedown",i=>{const s=i.target;s instanceof Element&&s.closest('[data-region="alpha-thumb"]')||(Ie("alpha"),Fn(t,i.clientX),r=!0,document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0))})}function Fn(e,t){const n=e.getBoundingClientRect();oc(Math.max(0,Math.min(1,(t-n.left)/n.width)))}function Hn(e,t){return e.kind==="text"?t==="text"?e.style.color:t==="border"?e.style.borderColor??"#000000":e.style.backgroundColor??"transparent":e.kind==="shape"?t==="text"?e.stroke:e.fill:t==="text"?e.stroke:""}function ic(e){return e.kind==="text"?e.style.backgroundOpacity??1:e.kind==="shape"?e.fillOpacity??1:e.strokeOpacity??1}function Wn(e,t){return e?e===t?!0:e.replace(/\s+/g,"")===t.replace(/\s+/g,""):!1}function Un(e,t,n){var l,p,h;const r=$.swatchMode==="muted"?No:Do,o=[];if(n&&(e==="bg"||e==="border")){const d=t==="transparent"||!t;o.push(`
      <button type="button" class="swatch transparent" data-swatch="${e}" data-value="transparent" title="Transparent" aria-pressed="${d}">
        <svg viewBox="0 0 22 22" width="22" height="22">
          <line x1="3" y1="19" x2="19" y2="3" stroke="var(--c-error)" stroke-width="1.5"/>
        </svg>
      </button>
    `)}for(let d=0;d<r.length;d++){const u=r[d];if(!u)continue;const f=d===1,m=Wn(t,u.resolved);o.push(`
      <button type="button" class="swatch${f?" is-white":""}" data-swatch="${e}" data-value="${u.resolved}" style="background:${u.resolved}" aria-pressed="${m}" title="${e} ${u.resolved}"></button>
    `)}const a=N(),i=(e==="text"||e==="border"?(l=a==null?void 0:a.siteColors)==null?void 0:l.text:(p=a==null?void 0:a.siteColors)==null?void 0:p.background)??[];for(const d of i){const u=Wn(t,d);o.push(`
      <button type="button" class="swatch site" data-swatch="${e}" data-value="${V(d)}" style="background:${V(d)}" aria-pressed="${u}" title="Site color ${V(d)}"></button>
    `)}const s=e==="text"||e==="border"?"text":"background",c=((h=a==null?void 0:a.customColors)==null?void 0:h[s])??[];for(const d of c){const u=Wn(t,d);o.push(`
      <span class="swatch-wrap">
        <button type="button" class="swatch" data-swatch="${e}" data-value="${V(d)}" style="background:${V(d)}" aria-pressed="${u}" title="Custom ${V(d)}"></button>
        <button type="button" class="swatch-remove" data-action="custom-remove" data-slot="${e}" data-value="${V(d)}" title="Remove" aria-label="Remove color ${V(d)}">×</button>
      </span>
    `)}return o.push(`
    <button type="button" class="swatch more" data-action="more-colors" data-slot="${e}" title="More colors" aria-label="More colors">···</button>
  `),o.join("")}function jn(){const{shadow:e,activeId:t,activeKind:n}=$;if(!e||!t||!n)return;const r=M(t);if(!r||r.kind==="arrow")return;const o=r,a=e.querySelector('[data-region="caption"]');a&&(a.textContent=fc(n)),e.querySelectorAll('[data-action="swatch-mode"]').forEach(i=>{const s=i.getAttribute("data-mode");i.setAttribute("aria-pressed",String(s===$.swatchMode))}),cc(e,n),lc(e,n,o),pc(e,n,o),dc(e,n,o),uc(e,o),hc(e,o)}function cc(e,t){const n=e.querySelector('[data-region="type-row"]'),r=e.querySelector('[data-region="divider-1"]'),o=t==="text";n&&(n.hidden=!o),r&&(r.hidden=!o);const a=e.querySelector('[data-region="width-row"]'),i=t==="shape"||t==="freedraw";a&&(a.hidden=!i);const s=e.querySelector('[data-region="bg-row"]');s&&(s.hidden=t==="freedraw");const c=e.querySelector('[data-region="border-row"]');c&&(c.hidden=t!=="text");const l=e.querySelector('[data-region="text-label"]');l&&(l.textContent=t==="text"?"Text":"Stroke");const p=e.querySelector('[data-region="bg-label"]');p&&(p.textContent=t==="text"?"Bg":"Fill")}function lc(e,t,n){if(t!=="text"||n.kind!=="text")return;const r=e.querySelector('[data-region="font"]');r&&(r.value=n.style.fontFamily);const o=e.querySelector('[data-region="size"]');o&&(o.value=String(n.style.fontSize));const a=e.querySelector('[data-region="bold"]');a&&a.setAttribute("aria-pressed",String(n.style.bold));const i=e.querySelector('[data-region="italic"]');i&&i.setAttribute("aria-pressed",String(n.style.italic===!0))}function pc(e,t,n){if(t!=="shape"&&t!=="freedraw"||n.kind!=="shape"&&n.kind!=="freedraw")return;const r=e.querySelector('[data-region="width"]'),o=e.querySelector('[data-region="width-value"]'),a=n.strokeWidth;r&&(r.value=String(a)),o&&(o.textContent=String(a))}function dc(e,t,n){const r=e.querySelector('[data-region="text-swatches"]'),o=e.querySelector('[data-region="bg-swatches"]'),a=e.querySelector('[data-region="border-swatches"]'),i=e.querySelector('[data-region="bg-row"]'),s=e.querySelector('[data-region="border-row"]'),c=Hn(n,"text"),l=Hn(n,"bg");if(r&&(r.innerHTML=Un("text",c,!1)),o&&!(i!=null&&i.hidden)&&(o.innerHTML=Un("bg",l,t==="text")),a&&!(s!=null&&s.hidden)&&n.kind==="text"){const p=n.style.borderColor??"#000000";a.innerHTML=Un("border",p,!0)}}function uc(e,t){const n=e.querySelector('[data-region="effect"]');n&&(n.value=Yi(t))}function hc(e,t){const n=Math.round(ic(t)*100),r=e.querySelector('[data-region="alpha-fill"]'),o=e.querySelector('[data-region="alpha-thumb"]'),a=e.querySelector('[data-region="alpha-value"]');r&&(r.style.width=`${n}%`),o&&(o.style.left=`${n}%`),a&&(a.textContent=`${n}%`)}function fc(e){return e==="text"?"Text":e==="shape"?"Shape":"Freedraw"}let ze=!1;function mc(e){const{shadow:t,host:n}=$;if(!t||!n)return;const r=a=>a.stopPropagation();n.addEventListener("keydown",r),n.addEventListener("keypress",r),n.addEventListener("keyup",r),t.addEventListener("click",a=>gc(a)),t.addEventListener("change",a=>_c(a)),t.addEventListener("input",a=>bc(a)),sc();const o=()=>{ze&&(ze=!1,Oe()),e()};document.addEventListener("mousedown",a=>vc(a,o),!0),document.addEventListener("keydown",a=>xc(a,o),!0)}function Vn(e){const t=$.shadow;if(!t)return;const n=t.querySelector('[data-region="format-painter-menu"]'),r=t.querySelector('[data-region="format-painter"]');n&&(e?n.removeAttribute("hidden"):n.setAttribute("hidden","")),r==null||r.setAttribute("aria-expanded",String(e))}function gc(e){var l;const t=e.target;if(!(t instanceof Element))return;if(t.closest('[data-action="format-painter-toggle"]')){const p=(l=$.shadow)==null?void 0:l.querySelector('[data-region="format-painter-menu"]');Vn((p==null?void 0:p.hasAttribute("hidden"))??!1);return}t.closest(".format-painter-wrap")||Vn(!1);const n=t.closest('[data-action="swatch-mode"]');if(n){const p=n.getAttribute("data-mode");(p==="muted"||p==="vibrant")&&($.swatchMode=p,jn());return}const r=t.closest('[data-action="batch-apply"]');if(r){const{activeId:p}=$;if(!p)return;const h=M(p);if(!h)return;const d=ji(h);r.getAttribute("data-scope")==="scenario"?gs(h.kind,d):ms(h.kind,d),Vn(!1);return}if(t.closest('[data-region="bold"]'))return tc();if(t.closest('[data-region="italic"]'))return nc();if(t.closest('[data-region="effect-play"]')){$.activeId&&zi($.activeId);return}const o=t.closest('[data-swatch="text"]');if(o)return Bo(o.getAttribute("data-value")??"");const a=t.closest('[data-swatch="bg"]');if(a)return zo(a.getAttribute("data-value")??"");const i=t.closest('[data-swatch="border"]');if(i)return Fo(i.getAttribute("data-value")??"");const s=t.closest('[data-action="more-colors"]');if(s instanceof HTMLElement)return yc(s);const c=t.closest('[data-action="custom-remove"]');if(c instanceof HTMLElement){const p=c.getAttribute("data-slot"),h=c.getAttribute("data-value");p&&h&&bs(p==="text"||p==="border"?"text":"background",h)}}function _c(e){const t=e.target;t instanceof HTMLElement&&(t.dataset.region==="font"?Qi(t.value):t.dataset.region==="effect"?rc(t.value):t.dataset.region==="width"&&ze&&(ze=!1,Oe()))}function bc(e){const t=e.target;if(t instanceof HTMLInputElement){if(t.dataset.region==="size"){const n=Math.max(Po,Math.min(Io,Number(t.value)||16));ec(n)}else if(t.dataset.region==="width"){ze||(ze=!0,Ie("width"));const n=Math.max(Oo,Math.min(Ro,Number(t.value)||0));ac(n)}}}function yc(e){const{activeId:t,activeKind:n}=$;if(!t||!n)return;const r=M(t);if(!r||r.kind==="arrow")return;const o=r,a=e.getAttribute("data-slot");if(!a)return;const i=Hn(o,a)||"#ffffff";ki({anchor:e,initialColor:i,onConfirm:s=>{_s(a==="text"||a==="border"?"text":"background",s),a==="text"?Bo(s):a==="border"?Fo(s):zo(s)}})}function vc(e,t){const{host:n,activeAnchorSelector:r}=$,o=e.target;!(o instanceof HTMLElement)&&!(o instanceof SVGElement)||n!=null&&n.contains(o)||Ui(o)||$i()||r&&o instanceof Element&&o.closest(r)||o instanceof Element&&o.closest('[data-manuscript="ui"]')||(t(),xe())}function xc(e,t){e.key==="Escape"&&(e.preventDefault(),t())}function Ho(e){const{host:t}=$;if(!t)return;t.style.left="0px",t.style.top="0px";const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();let o=r.top-n.height-Co-Ki;o<8&&(o=r.bottom+Co);const a=Math.max(8,Math.min(r.left+r.width/2-n.width/2,window.innerWidth-n.width-8));t.style.top=`${o}px`,t.style.left=`${a}px`}function wc(e,t){return e==="text"?`[data-annotation-text="${t}"]`:e==="shape"?`[data-annotation-shape="${t}"]`:`[data-annotation-freedraw="${t}"]`}function kc(e,t){e==="text"?Wi(t):e==="shape"?Fi(t):Hi(t)}function $c(){return`
    ${qe()}
    :host { display: block; font-family: var(--ff-sans); color: var(--c-text); }
    *, *::before, *::after { box-sizing: border-box; }

    .popup {
      width: 320px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      font-size: var(--fs-body);
    }
    .anchor-tick {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -1px);
      width: 12px;
      height: 6px;
      pointer-events: none;
    }

    .row { display: flex; align-items: center; gap: 6px; }
    .row.label-row { gap: 8px; }
    .label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
      width: 50px;
      padding-right: 6px;
      flex-shrink: 0;
    }
    .label.wide {
      letter-spacing: 0.10em;
      width: auto;
    }
    .divider {
      height: 1px;
      background: var(--c-border);
      margin: 2px 0;
    }

    .header { display: flex; align-items: center; justify-content: space-between; }
    .toggle {
      display: inline-flex;
      padding: 2px;
      background: var(--c-surface-2);
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
    }
    .toggle button {
      padding: 3px 9px;
      border: none;
      border-radius: var(--r-xs);
      background: transparent;
      color: var(--c-text-mute);
      font-size: 10px;
      font-weight: 600;
      font-family: var(--ff-sans);
      cursor: pointer;
      letter-spacing: 0.02em;
    }
    .toggle button[aria-pressed="true"] {
      background: var(--c-surface);
      color: var(--c-text);
      box-shadow: var(--shadow-sm);
    }

    .type-row { display: flex; align-items: center; gap: 6px; }
    .select, .size-input, .type-btn {
      height: 28px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-sans);
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      padding: 0 10px;
    }
    .select {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      appearance: auto;
    }
    .size-input {
      width: 54px;
      padding: 0 8px;
      text-align: right;
      font-family: var(--ff-mono);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .type-btn {
      width: 28px;
      padding: 0;
      display: inline-grid;
      place-items: center;
      font-size: 12px;
      font-weight: 600;
    }
    .type-btn.italic { font-style: italic; font-weight: 500; }
    .type-btn[aria-pressed="true"] {
      background: var(--c-text);
      color: var(--c-surface);
      border-color: var(--c-text);
    }
    .type-btn[aria-pressed="false"] { color: var(--c-text-mute); }
  `}function Sc(){return`
    .swatch-row { display: flex; align-items: center; gap: 8px; }
    .swatches { display: flex; gap: 4px; flex: 1; flex-wrap: wrap; }
    .swatch {
      width: 22px;
      height: 22px;
      padding: 0;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      position: relative;
    }
    .swatch.is-white { border-color: var(--c-border-strong); }
    .swatch[aria-pressed="true"] {
      border: 2px solid var(--c-text);
      box-shadow: 0 0 0 2px var(--c-surface), 0 0 0 3px var(--c-text);
    }
    .swatch.transparent {
      background: var(--c-surface);
      border-color: var(--c-border-strong);
      overflow: hidden;
    }
    .swatch.transparent svg { position: absolute; inset: 0; }
    .swatch.more {
      background: var(--c-surface);
      border-color: var(--c-border);
      color: var(--c-text-mute);
      display: inline-grid;
      place-items: center;
      font-size: 10px;
      line-height: 1;
    }
    .swatch-wrap { position: relative; width: 22px; height: 22px; display: inline-block; }
    .swatch-remove {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 14px;
      height: 14px;
      padding: 0;
      border-radius: 999px;
      background: var(--c-text);
      color: var(--c-surface);
      border: 1px solid var(--c-surface);
      font-size: 10px;
      line-height: 1;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .swatch-wrap:hover .swatch-remove,
    .swatch-remove:focus-visible { display: inline-flex; }
    .swatch-remove:hover { background: var(--c-error); }
    /* hidden HTML attribute가 display:flex보다 우선되도록 */
    .type-row[hidden],
    .width-row[hidden],
    .swatch-row[hidden],
    .divider[hidden] { display: none !important; }

    .effect-controls { display: flex; flex: 1; gap: 4px; }
    .icon-btn {
      width: 28px;
      height: 28px;
      padding: 0;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      display: inline-grid;
      place-items: center;
      cursor: pointer;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }

    .alpha-row { display: flex; align-items: center; gap: 8px; }
    .alpha-track-wrap { flex: 1; height: 28px; display: flex; align-items: center; gap: 10px; }
    .alpha-track {
      flex: 1;
      height: 4px;
      border-radius: 999px;
      background: var(--c-border);
      position: relative;
      cursor: pointer;
    }
    .alpha-fill {
      position: absolute; left: 0; top: 0; bottom: 0;
      background: var(--c-text);
      border-radius: 999px;
    }
    .alpha-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.08);
      cursor: grab;
    }
    .alpha-thumb:active { cursor: grabbing; }
    .alpha-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    .width-row { display: flex; align-items: center; gap: 8px; }
    .width-input { flex: 1; accent-color: var(--c-text); height: 4px; padding: 0; margin: 0; }
    .width-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    /* Format painter — brush button + dropdown of scope buttons. */
    .header-right { display: inline-flex; align-items: center; gap: 6px; }
    .format-painter-wrap { position: relative; display: inline-flex; }
    .format-painter-btn {
      width: 22px;
      height: 22px;
      padding: 0;
      appearance: none;
      background: transparent;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      color: var(--c-text-mute);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: border-color 160ms ease, color 160ms ease;
    }
    .format-painter-btn:hover,
    .format-painter-btn[aria-expanded="true"] {
      color: var(--c-text);
      border-color: var(--c-border-strong);
    }
    .format-painter-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 96px;
      padding: 6px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-card);
    }
    .format-painter-menu[hidden] { display: none; }
    .batch-btn {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
    }
    .batch-btn:hover { background: var(--c-tint); color: var(--c-text); }
  `}function Ac(){return[$c(),Sc()].join(`
`)}function Mc(){return`
    <style>${Ac()}</style>
    <div class="popup" role="dialog" aria-label="Annotation properties">
      ${Ec()}
      ${Lc()}
      <div class="divider" data-region="divider-1" hidden></div>
      ${Tc()}
      <div class="divider"></div>
      ${Cc()}
      ${Pc()}
      ${Ic()}
      ${Oc()}
    </div>
  `}function Ec(){return`
    <div class="header">
      <span class="label wide" data-region="caption">Annotation · 속성</span>
      <div class="header-right">
        <div class="format-painter-wrap">
          <button type="button" class="format-painter-btn" data-action="format-painter-toggle" data-region="format-painter" aria-haspopup="true" aria-expanded="false" aria-label="${A("copy.formatting")}" title="${A("copy.formatting")}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="4.5" y="3" width="15" height="5" rx="1.5"></rect>
              <rect x="6.5" y="8" width="11" height="2.6" rx="0.6"></rect>
              <path d="M11 10.6 v6.4 a1 1 0 0 0 2 0 V10.6"></path>
            </svg>
          </button>
          <div class="format-painter-menu" data-region="format-painter-menu" role="menu" hidden>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="step">${A("apply.this-step")}</button>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="scenario">${A("apply.all-steps")}</button>
          </div>
        </div>
        <div class="toggle" role="tablist" aria-label="Color palette mode">
          <button type="button" data-action="swatch-mode" data-mode="muted" aria-pressed="true">Muted</button>
          <button type="button" data-action="swatch-mode" data-mode="vibrant" aria-pressed="false">Vibrant</button>
        </div>
      </div>
    </div>
  `}function Lc(){var t;return`
    <div class="type-row" data-region="type-row" hidden>
      <select class="select" data-region="font">
        ${Zi((t=N())==null?void 0:t.siteFonts).map(n=>`<option value="${V(n.value)}" style="font-family: ${V(n.value)};">${n.label}</option>`).join("")}
      </select>
      <input class="size-input" type="number" min="${Po}" max="${Io}" data-region="size" />
      <button type="button" class="type-btn" data-region="bold" aria-pressed="false" title="Bold">B</button>
      <button type="button" class="type-btn italic" data-region="italic" aria-pressed="false" title="Italic">I</button>
    </div>
  `}function Tc(){return`
    <div class="swatch-row" data-region="text-row">
      <span class="label" data-region="text-label">Text</span>
      <div class="swatches" data-region="text-swatches"></div>
    </div>
    <div class="swatch-row" data-region="bg-row">
      <span class="label" data-region="bg-label">Bg</span>
      <div class="swatches" data-region="bg-swatches"></div>
    </div>
    <div class="swatch-row" data-region="border-row" hidden>
      <span class="label" data-region="border-label">Border</span>
      <div class="swatches" data-region="border-swatches"></div>
    </div>
  `}function Cc(){return`
    <div class="width-row" data-region="width-row" hidden>
      <span class="label">Width</span>
      <input class="width-input" type="range" min="${Oo}" max="${Ro}" step="1" data-region="width" />
      <span class="width-value" data-region="width-value">2</span>
    </div>
  `}function Pc(){return`
    <div class="row label-row">
      <span class="label">Effect</span>
      <div class="effect-controls">
        <select class="select" data-region="effect">
          ${Ji.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
        </select>
        <button type="button" class="icon-btn" data-region="effect-play" title="Preview effect" aria-label="Preview effect">
          <svg width="9" height="9" viewBox="0 0 16 16" fill="currentColor"><path d="M 4 3 L 4 13 L 13 8 Z"/></svg>
        </button>
      </div>
    </div>
  `}function Ic(){return`
    <div class="alpha-row">
      <span class="label">Opacity</span>
      <div class="alpha-track-wrap">
        <div class="alpha-track" data-region="alpha-track">
          <div class="alpha-fill" data-region="alpha-fill"></div>
          <div class="alpha-thumb" data-region="alpha-thumb"></div>
        </div>
        <span class="alpha-value" data-region="alpha-value">100%</span>
      </div>
    </div>
  `}function Oc(){return`
    <div class="anchor-tick">
      <svg viewBox="0 0 12 6" width="12" height="6">
        <path d="M 0 0 L 6 6 L 12 0 Z" fill="var(--c-surface)"/>
        <path d="M 0 0 L 6 6 L 12 0" fill="none" stroke="var(--c-border)" stroke-width="1"/>
      </svg>
    </div>
  `}function Gn(e,t,n){M(e)&&($.activeId=e,$.activeKind=n,$.activeAnchorSelector=wc(n,e),$.host||qc(),jn(),Ho(t),kc(n,e),document.dispatchEvent(new CustomEvent("manuscript:annotation-selected",{detail:{id:e}})))}function Wo(){var e;$.host&&((e=$.unsubscribeScenario)==null||e.call($),$.unsubscribeScenario=null,xe(),Bn(),$.host.remove(),$.host=null,$.shadow=null,$.activeId=null,$.activeKind=null,$.activeAnchorSelector=null,document.dispatchEvent(new CustomEvent("manuscript:annotation-selected",{detail:{id:null}})))}function Rc(e,t){Gn(e,t,"text")}function Nc(e,t){Gn(e,t,"shape")}function Dc(e,t){Gn(e,t,"freedraw")}function qc(){const{host:e,shadow:t}=be();e.setAttribute("data-popup","annotation-editor"),e.style.cssText=["position: fixed",`z-index: ${J+5}`,"pointer-events: auto"].join("; "),t.innerHTML=Mc(),$.host=e,$.shadow=t,document.body.appendChild(e),mc(Wo),$.unsubscribeScenario=Te(Bc)}function Bc(){const{activeId:e,host:t,activeAnchorSelector:n}=$;if(!e||!t)return;if(!M(e)){Wo();return}if(jn(),n){const o=document.querySelector(n);o&&Ho(o)}}const y={state:null,unsubscribeStep:null};function pt(){return y.state!==null}function Xn(){var e;return((e=y.state)==null?void 0:e.standalone)===!0}function zc(e,t){const{svg:n}=E;if(!n)return;const r=Bt(e,t),o=Fc(e,r),a=r.map(c=>`${c.x},${c.y}`).join(" "),i=document.createElementNS(Dt,"polyline");if(i.setAttribute("points",a),i.setAttribute("fill","none"),i.setAttribute("stroke",e.stroke),i.setAttribute("stroke-width",String(e.strokeWidth)),i.setAttribute("stroke-linecap","round"),i.setAttribute("stroke-linejoin","round"),i.setAttribute(no,e.id),e.strokeOpacity!==void 0&&e.strokeOpacity<1&&i.setAttribute("stroke-opacity",String(Math.max(0,Math.min(1,e.strokeOpacity)))),o&&i.setAttribute("transform",o),i.style.pointerEvents="none",it(i,e.entryAnimation,e.rotate??0),n.appendChild(i),Xn())return;const s=document.createElementNS(Dt,"polyline");s.setAttribute(no,e.id),s.setAttribute("points",a),s.setAttribute("fill","none"),s.setAttribute("stroke","transparent"),s.setAttribute("stroke-width",String(Math.max(12,e.strokeWidth+10))),s.setAttribute("stroke-linecap","round"),s.setAttribute("stroke-linejoin","round"),s.setAttribute("pointer-events","stroke"),o&&s.setAttribute("transform",o),s.style.cursor="pointer",s.addEventListener("mousedown",c=>{c.button===0&&(c.stopPropagation(),c.preventDefault(),Hc(e.id,c,s))}),n.appendChild(s)}function Fc(e,t){const n=e.rotate??0;if(!n||t.length===0)return"";let r=1/0,o=1/0,a=-1/0,i=-1/0;for(const l of t)l.x<r&&(r=l.x),l.y<o&&(o=l.y),l.x>a&&(a=l.x),l.y>i&&(i=l.y);const s=(r+a)/2,c=(o+i)/2;return`rotate(${n} ${s} ${c})`}function Hc(e,t,n){const r=M(e);if(!r||r.kind!=="freedraw")return;const o={x:t.clientX,y:t.clientY},a=Q(),i=Bt(r,a).map(p=>({...p}));let s=!1;const c=p=>{const h=p.clientX-o.x,d=p.clientY-o.y;if(!s&&Math.hypot(h,d)<3)return;s=!0,p.preventDefault();const u=i.map(m=>({x:m.x+h,y:m.y+d})),f=a?{points:u,pointsAnchorOffset:u.map(m=>({x:m.x-a.left,y:m.y-a.top}))}:{points:u,pointsAnchorOffset:void 0};L(e,f)},l=()=>{document.removeEventListener("mousemove",c,!0),document.removeEventListener("mouseup",l,!0);const p=document.querySelectorAll(`[data-annotation-freedraw="${e}"]`),h=p[p.length-1]??n;Dc(e,h)};document.addEventListener("mousemove",c,!0),document.addEventListener("mouseup",l,!0)}const dt="http://www.w3.org/2000/svg";function Wc(e,t){let n;switch(e){case"rectangle":n=Uc(t);break;case"ellipse":n=jc(t);break;case"triangle":n=Ut(Xc(t),t);break;case"diamond":n=Ut(Yc(t),t);break;case"star":n=Ut(Kc(t),t);break;case"callout":n=Gc(Zc(t),t);break;case"line":n=Vc(t);break;case"block-arrow":n=Ut(Jc(t),t);break}if(n&&t.rotate){const r=t.x+t.width/2,o=t.y+t.height/2;n.setAttribute("transform",`rotate(${t.rotate} ${r} ${o})`)}return n}function Uc(e){const t=document.createElementNS(dt,"rect");return t.setAttribute("x",String(e.x)),t.setAttribute("y",String(e.y)),t.setAttribute("width",String(e.width)),t.setAttribute("height",String(e.height)),jt(t,e),t}function jc(e){const t=document.createElementNS(dt,"ellipse");return t.setAttribute("cx",String(e.x+e.width/2)),t.setAttribute("cy",String(e.y+e.height/2)),t.setAttribute("rx",String(Math.max(0,e.width/2))),t.setAttribute("ry",String(Math.max(0,e.height/2))),jt(t,e),t}function Vc(e){const t=document.createElementNS(dt,"line");return t.setAttribute("x1",String(e.x)),t.setAttribute("y1",String(e.y)),t.setAttribute("x2",String(e.x+e.width)),t.setAttribute("y2",String(e.y+e.height)),t.setAttribute("stroke",e.stroke||"#000000"),t.setAttribute("stroke-width",String(e.strokeWidth)),t.setAttribute("stroke-linecap","round"),t.setAttribute("fill","none"),t}function Ut(e,t){const n=document.createElementNS(dt,"polygon");return n.setAttribute("points",e),jt(n,t),n.setAttribute("stroke-linejoin","round"),n}function Gc(e,t){const n=document.createElementNS(dt,"path");return n.setAttribute("d",e),jt(n,t),n.setAttribute("stroke-linejoin","round"),n}function jt(e,t){e.setAttribute("fill",t.fill||"transparent"),e.setAttribute("stroke",t.stroke||"transparent"),e.setAttribute("stroke-width",String(t.strokeWidth)),t.fillOpacity!==void 0&&t.fillOpacity<1&&e.setAttribute("fill-opacity",String(Math.max(0,Math.min(1,t.fillOpacity))))}function Xc(e){const t=e.x,n=e.x+e.width,r=e.y,o=e.y+e.height;return`${(t+n)/2},${r} ${n},${o} ${t},${o}`}function Yc(e){const t=e.x+e.width/2,n=e.y+e.height/2;return`${t},${e.y} ${e.x+e.width},${n} ${t},${e.y+e.height} ${e.x},${n}`}function Kc(e){const t=e.x+e.width/2,n=e.y+e.height/2,r=Math.min(e.width,e.height)/2,o=r*.5,a=[];for(let i=0;i<10;i++){const s=Math.PI/5*i-Math.PI/2,c=i%2===0?r:o;a.push(`${t+Math.cos(s)*c},${n+Math.sin(s)*c}`)}return a.join(" ")}function Zc(e){const t=Math.min(10,e.width/4,e.height/4),n=Math.min(18,e.height*.2),r=e.y+e.height-n,o=e.x+e.width*.32,a=e.x+e.width*.5,i=e.x+e.width*.22,s=e.y+e.height;return[`M ${e.x+t} ${e.y}`,`L ${e.x+e.width-t} ${e.y}`,`Q ${e.x+e.width} ${e.y} ${e.x+e.width} ${e.y+t}`,`L ${e.x+e.width} ${r-t}`,`Q ${e.x+e.width} ${r} ${e.x+e.width-t} ${r}`,`L ${a} ${r}`,`L ${i} ${s}`,`L ${o} ${r}`,`L ${e.x+t} ${r}`,`Q ${e.x} ${r} ${e.x} ${r-t}`,`L ${e.x} ${e.y+t}`,`Q ${e.x} ${e.y} ${e.x+t} ${e.y}`,"Z"].join(" ")}function Jc(e){const t=e.x+e.width/2,n=e.y+e.height*.45,r=Math.min(e.width/2,e.width*.22);return[`${t},${e.y}`,`${e.x+e.width},${n}`,`${t+r},${n}`,`${t+r},${e.y+e.height}`,`${t-r},${e.y+e.height}`,`${t-r},${n}`,`${e.x},${n}`].join(" ")}function Qc(e,t){const{svg:n}=E;if(!n)return;const r=qt(e,t),o=Wc(e.shapeKind,{x:r.x,y:r.y,width:e.bounds.width,height:e.bounds.height,fill:e.fill,stroke:e.stroke,strokeWidth:e.strokeWidth,fillOpacity:e.fillOpacity,rotate:e.rotate});o&&(o.setAttribute(to,e.id),o.style.pointerEvents="none",it(o,e.entryAnimation,e.rotate??0),n.appendChild(o),Xn()||n.appendChild(el(e,r)))}function el(e,t){const n=document.createElementNS(Dt,"rect");if(n.setAttribute(to,e.id),n.setAttribute("x",String(t.x)),n.setAttribute("y",String(t.y)),n.setAttribute("width",String(Math.max(0,e.bounds.width))),n.setAttribute("height",String(Math.max(0,e.bounds.height))),n.setAttribute("fill","rgba(0, 0, 0, 0.001)"),n.setAttribute("stroke","none"),n.setAttribute("pointer-events","all"),n.style.pointerEvents="all",n.style.cursor="pointer",e.rotate){const r=t.x+e.bounds.width/2,o=t.y+e.bounds.height/2;n.setAttribute("transform",`rotate(${e.rotate} ${r} ${o})`)}return n.addEventListener("mousedown",r=>tl(e.id,r,n)),n}function tl(e,t,n){if(t.button!==0)return;t.stopPropagation(),t.preventDefault();const r={x:t.clientX,y:t.clientY},o=M(e);if(!o||o.kind!=="shape")return;const a=Q(),i=o.boundsAnchorOffset&&a?{x:a.left+o.boundsAnchorOffset.x,y:a.top+o.boundsAnchorOffset.y}:{x:o.bounds.x,y:o.bounds.y},s={...o.bounds,x:i.x,y:i.y};let c=!1;const l=h=>{const d=h.clientX-r.x,u=h.clientY-r.y;if(!c&&Math.hypot(d,u)<3)return;c=!0,h.preventDefault();const f=s.x+d,m=s.y+u,g=a?{bounds:{...s,x:f,y:m},boundsAnchorOffset:{x:f-a.left,y:m-a.top}}:{bounds:{...s,x:f,y:m},boundsAnchorOffset:void 0};L(e,g)},p=()=>{document.removeEventListener("mousemove",l,!0),document.removeEventListener("mouseup",p,!0);const h=document.querySelectorAll(`[data-annotation-shape="${e}"]`),d=h[h.length-1]??n;Nc(e,d)};document.addEventListener("mousemove",l,!0),document.addEventListener("mouseup",p,!0)}function nl(e,t){const{host:n}=E;if(!n)return;const r=document.createElement("div");r.setAttribute(Qr,e.id),r.setAttribute("data-manuscript","ui"),r.dataset.annotationId=e.id;const o=e.style.italic===!0,a=e.style.backgroundColor??"#ffffff",i=e.style.backgroundOpacity??.96,s=a==="transparent"?"transparent":rl(a,i),c=e.rotate??0,l=e.style.borderColor??"#000000",p=l==="transparent"?"none":`2px solid ${l}`,h=Ks(e,t),d=Xn();r.style.cssText=["position: absolute",`left: ${h.x}px`,`top: ${h.y}px`,`font-family: ${e.style.fontFamily}`,`font-size: ${e.style.fontSize}px`,`color: ${e.style.color}`,`font-weight: ${e.style.bold?"700":"400"}`,`font-style: ${o?"italic":"normal"}`,"padding: 8px 12px",`background: ${s}`,`border: ${p}`,"border-radius: 8px",d?"pointer-events: none":"pointer-events: auto",d?"cursor: default":"cursor: move","user-select: none","box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)","max-width: 320px","word-wrap: break-word","line-height: 1.4",`transform: rotate(${c}deg)`,"transform-origin: center center"].join("; "),r.textContent=e.text,d||ol(r,e.id),it(r,e.entryAnimation,e.rotate??0),n.appendChild(r)}function rl(e,t){const n=Math.max(0,Math.min(1,t)),r=e.trim();if(r.startsWith("#")){let o=0,a=0,i=0;return r.length===4?(o=parseInt(r[1]+r[1],16),a=parseInt(r[2]+r[2],16),i=parseInt(r[3]+r[3],16)):r.length===7&&(o=parseInt(r.slice(1,3),16),a=parseInt(r.slice(3,5),16),i=parseInt(r.slice(5,7),16)),`rgba(${o}, ${a}, ${i}, ${n})`}return e}function ol(e,t){let n=!1,r=0,o=0,a=0,i=0,s=!1;e.addEventListener("mousedown",c=>{if(e.isContentEditable)return;n=!0,s=!1,r=c.clientX,o=c.clientY;const l=e.getBoundingClientRect();a=l.left,i=l.top,c.preventDefault()}),document.addEventListener("mousemove",c=>{if(!n)return;const l=c.clientX-r,p=c.clientY-o;Math.abs(l)+Math.abs(p)>2&&(s=!0),e.style.left=`${a+l}px`,e.style.top=`${i+p}px`}),document.addEventListener("mouseup",()=>{if(!n||(n=!1,!s))return;const c=parseFloat(e.style.left),l=parseFloat(e.style.top),p=Q(),h=p?{position:{x:c,y:l},anchorOffset:{x:c-p.left,y:l-p.top}}:{position:{x:c,y:l},anchorOffset:void 0};L(t,h)}),e.addEventListener("click",c=>{s||e.isContentEditable||(c.stopPropagation(),Rc(t,e))}),e.addEventListener("dblclick",()=>{e.contentEditable="true",e.style.cursor="text",e.focus(),al(e)}),e.addEventListener("blur",()=>{e.isContentEditable&&(e.contentEditable="false",e.style.cursor="move",L(t,{text:e.textContent??""}))}),e.addEventListener("keydown",c=>{c.key==="Escape"&&e.isContentEditable&&e.blur()})}function al(e){const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(t))}function Uo(){if(E.host)return;Vs();const e=document.createElement("div");e.setAttribute("data-manuscript","ui"),e.style.cssText=["position: fixed","top: 0","left: 0","width: 100vw","height: 100vh","pointer-events: none",`z-index: ${J+3}`].join("; ");const t=document.createElementNS(Dt,"svg");t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.style.cssText=["position: absolute","top: 0","left: 0","pointer-events: none","overflow: visible"].join("; "),e.appendChild(t),E.host=e,E.svg=t,E.roughSvg=js.svg(t),document.body.appendChild(e),E.unsubscribe=Te(Vt),E.unsubscribeMode=Tr(Vt),sl(),Vt()}let Fe=null;function ut(){Fe===null&&(Fe=requestAnimationFrame(()=>{Fe=null,Vt()}))}let we=null,Yn=null;function sl(){window.addEventListener("resize",ut),window.addEventListener("scroll",ut,!0),typeof ResizeObserver<"u"&&(we=new ResizeObserver(ut))}function il(){window.removeEventListener("resize",ut),window.removeEventListener("scroll",ut,!0),we&&(we.disconnect(),we=null),Yn=null,Fe!==null&&(cancelAnimationFrame(Fe),Fe=null)}function cl(){var e,t;(e=E.unsubscribe)==null||e.call(E),E.unsubscribe=null,(t=E.unsubscribeMode)==null||t.call(E),E.unsubscribeMode=null,il(),E.host&&(E.host.remove(),E.host=null,E.svg=null,E.roughSvg=null)}function jo(){return E.host!==null}function Vt(){const{host:e,svg:t}=E;if(!e||!t)return;for(e.querySelectorAll(`[${Qr}]`).forEach(o=>o.remove());t.firstChild;)t.removeChild(t.firstChild);const n=Q();if(we){let o=null;try{o=ll()}catch{o=null}o!==Yn&&(we.disconnect(),o&&we.observe(o),Yn=o)}const r=Mr();for(const o of r)o.kind==="text"?nl(o,n):o.kind==="arrow"?Js(o,n):o.kind==="shape"?Qc(o,n):o.kind==="freedraw"&&zc(o,n)}function ll(){const e=ne();if(!(e!=null&&e.selectors))return null;try{return ro(e.selectors)}catch{return null}}function He(e,t,n){return Math.max(t,Math.min(n,e))}const v={host:null,shadow:null,orientationApplied:!1,cleanupDrag:null,cleanupBlocked:null};function Vo(e){const{shadow:t}=v;if(!t)return;const n=t.querySelector(".bar");if(!n)return;n.classList.toggle("vertical",e==="vertical");const r=t.querySelector('[data-region="orient-icon"]');r&&(r.innerHTML=hl()),dl(),Gt()}const pl=12;function Gt(){const{host:e,shadow:t}=v;if(!e||!t)return;const n=t.querySelector(".bar");if(!n)return;if(!n.classList.contains("vertical")){n.classList.remove("progress-right");return}const r=e.getBoundingClientRect();n.classList.toggle("progress-right",r.left<pl)}function dl(){const{host:e}=v;if(!e||e.style.transform!=="none")return;const t=e.getBoundingClientRect(),n=Math.max(0,window.innerWidth-t.width),r=Math.max(0,window.innerHeight-t.height),o=parseFloat(e.style.left),a=parseFloat(e.style.top);Number.isFinite(o)&&(e.style.left=`${He(o,0,n)}px`),Number.isFinite(a)&&(e.style.top=`${He(a,0,r)}px`)}async function Go(){try{return await W().get(U.replayControlsOrientation)==="vertical"?"vertical":"horizontal"}catch{return"horizontal"}}async function ul(e){try{await W().set(U.replayControlsOrientation,e)}catch(t){console.warn("[manuscript] save orientation failed",t)}}function hl(){return'<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 5.5 1.5 L 3 4 L 5.5 6.5 M 3 4 L 12 4 L 12 13 M 9.5 10.5 L 12 13 L 14.5 10.5"/></svg>'}async function Xo(){try{const e=await W().get(U.replayControlsPosition);return e&&typeof e=="object"&&typeof e.left=="number"&&typeof e.top=="number"?e:null}catch{return null}}async function Yo(e){try{await W().set(U.replayControlsPosition,e)}catch{}}function fl(e,t){const n=e.getBoundingClientRect(),r=Math.max(0,Math.min(t.left,window.innerWidth-n.width)),o=Math.max(0,Math.min(t.top,window.innerHeight-n.height));e.style.left=`${r}px`,e.style.top=`${o}px`,e.style.bottom="auto",e.style.transform="none"}function ml(){const{host:e,shadow:t}=v;if(!e||!t)return;const n=t.querySelector('[data-region="move-handle"]');if(!n)return;let r=!1,o=0,a=0,i=0,s=0;const c=d=>{if(!v.host)return;d.preventDefault(),d.stopPropagation(),r=!0,n.classList.add("dragging");const u=v.host.getBoundingClientRect();v.host.style.left=`${u.left}px`,v.host.style.top=`${u.top}px`,v.host.style.bottom="auto",v.host.style.transform="none",o=d.clientX,a=d.clientY,i=u.left,s=u.top,document.addEventListener("mousemove",l,!0),document.addEventListener("mouseup",p,!0)},l=d=>{if(!r||!v.host)return;const u=v.host.getBoundingClientRect(),f=d.clientX-o,m=d.clientY-a,g=He(i+f,0,window.innerWidth-u.width),b=He(s+m,0,window.innerHeight-u.height);v.host.style.left=`${g}px`,v.host.style.top=`${b}px`,Gt()},p=()=>{r=!1,n.classList.remove("dragging"),document.removeEventListener("mousemove",l,!0),document.removeEventListener("mouseup",p,!0);const d=v.host;if(d){const u=parseFloat(d.style.left||"0"),f=parseFloat(d.style.top||"0");Number.isFinite(u)&&Number.isFinite(f)&&Yo({left:u,top:f})}},h=()=>{if(v.host&&v.host.style.transform==="none"){const d=v.host.getBoundingClientRect(),u=He(d.left,0,window.innerWidth-d.width),f=He(d.top,0,window.innerHeight-d.height);v.host.style.left=`${u}px`,v.host.style.top=`${f}px`,Yo({left:u,top:f}),Gt()}};n.addEventListener("mousedown",c),window.addEventListener("resize",h),v.cleanupDrag=()=>{n.removeEventListener("mousedown",c),window.removeEventListener("resize",h),document.removeEventListener("mousemove",l,!0),document.removeEventListener("mouseup",p,!0)}}function Ko(){return`
    ${qe()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .modal {
      background: var(--c-surface);
      border-radius: var(--r-md);
      padding: 22px 24px 20px;
      max-width: 420px;
      font-size: var(--fs-body);
      line-height: var(--lh-body);
      box-shadow: var(--shadow-lg);
      border-top: 3px solid var(--c-error);
    }
    .modal-head {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-circle {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: color-mix(in oklab, var(--c-error) 14%, transparent);
      color: var(--c-error);
      display: grid;
      place-items: center;
      font-size: 16px;
      font-weight: 600;
      flex-shrink: 0;
    }
    h2 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: var(--c-text);
    }
    p {
      margin: 4px 0 0;
      color: var(--c-text-mute);
      font-size: 13px;
      line-height: 1.5;
    }
    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 14px;
      flex-wrap: wrap;
    }
    button {
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: var(--r-sm);
      cursor: pointer;
    }
    .primary {
      background: var(--c-primary);
      color: var(--c-primary-fg);
      border: none;
    }
    .primary:hover { background: var(--c-primary-h); }
    .secondary {
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border-strong);
    }
    .secondary:hover { border-color: var(--c-text-mute); }
    button:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .url {
      display: block;
      font-family: var(--ff-mono);
      font-size: 12px;
      background: var(--c-surface-2);
      padding: 8px 10px;
      border-radius: var(--r-sm);
      word-break: break-all;
      margin: 12px 0 0 40px;
      color: var(--c-text);
    }
  `}function gl(e,t){const{shadow:n}=v;if(!n)return;const r=n.querySelector('[data-region="step-popup"]');r&&(r.innerHTML=e.map((o,a)=>{const i=o.name&&o.name.length>0?o.name:"Step Name";return`<li class="step-item${a===t?" active":""}" role="option" data-action="step-jump" data-index="${a}" aria-selected="${a===t}" title="${V(i)}">${a+1}. ${mo(i)}</li>`}).join(""))}function _l(){const{shadow:e}=v;if(!e)return;const t=e.querySelector('[data-region="step-popup"]');if(!t)return;t.hidden=!t.hidden;const n=e.querySelector('[data-region="counter"]');if(n==null||n.setAttribute("aria-expanded",String(!t.hidden)),!t.hidden){const r=t.querySelector(".step-item.active");r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest"})}}function Kn(){const{shadow:e}=v;if(!e)return;const t=e.querySelector('[data-region="step-popup"]');t&&(t.hidden=!0);const n=e.querySelector('[data-region="counter"]');n==null||n.setAttribute("aria-expanded","false")}function Zo(e){const{host:t,shadow:n}=v;if(!t||!n)return;const r=n.querySelector('[data-region="step-popup"]');!r||r.hidden||e.target instanceof Node&&t.contains(e.target)||Kn()}let Xt=-1,Yt=!1;function bl(){Xt=-1,Yt=!1}function yl(e,t,n,r=0){const{shadow:o}=v;if(!o)return;const a=o.querySelector('[data-region="progress"]');if(!a)return;if(t===null||t<=0){a.classList.add("hidden"),a.innerHTML="",Xt=-1,Yt=!1;return}a.classList.remove("hidden");const c=e!==Xt||Yt&&!n;Xt=e,Yt=n;let l=a.querySelector(".progress-fill");if(!l||c){l==null||l.remove(),l=document.createElement("div"),l.className="progress-fill",l.style.animationDuration=`${t}ms`;const p=Math.max(0,Math.min(r,t-1));p>0&&(l.style.animationDelay=`-${p}ms`),a.appendChild(l)}l.classList.toggle("paused",n)}function vl(){return`
    ${qe()}
    :host {
      display: block;
      font-family: var(--ff-sans);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .bar {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 6px 8px 14px;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-pill);
      box-shadow: var(--shadow-md);
      opacity: 0.45;
      transition: opacity 0.15s;
    }

    /* Horizontal mode: progress strip floats above the pill so the user
       can see remaining time without it crowding the controls. Vertical
       mode keeps its side strip inside the pill (see .bar.vertical .progress). */
    .progress {
      position: absolute;
      left: 50%;
      right: auto;
      top: auto;
      bottom: calc(100% + 6px);
      width: calc(100% - 28px);
      height: 4px;
      transform: translateX(-50%);
      border: 1px solid color-mix(in oklch, currentColor, transparent 40%);
      border-radius: 2px;
      overflow: hidden;
      background: transparent;
      pointer-events: none;
    }
    .progress.hidden { display: none; }
    .progress-fill {
      height: 100%;
      width: 100%;
      background: #0a99ff;
      transform: scaleX(0);
      transform-origin: left center;
      animation-name: progress-grow-x;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    .progress-fill.paused { animation-play-state: paused; }
    @keyframes progress-grow-x {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    /* Mirror of the horizontal strip: float OUTSIDE the pill (to the left),
       running parallel to the column's long axis — same 4px thickness, 6px
       gap, and end-inset (28px) as the horizontal bar floats above. Keeping
       it inside the narrow column crowded the buttons; outside reads as a
       clean side gauge. Flip to the right by swapping 'right' for 'left'. */
    .bar.vertical .progress {
      left: auto;
      right: calc(100% + 6px);
      top: 50%;
      bottom: auto;
      width: 4px;
      height: calc(100% - 28px);
      transform: translateY(-50%);
    }
    /* Docked against the left wall there's no room for the left-outside
       strip — JS toggles .progress-right (see updateProgressSide) to float
       it on the right instead. */
    .bar.vertical.progress-right .progress {
      right: auto;
      left: calc(100% + 6px);
    }
    .bar.vertical .progress-fill {
      transform: scaleY(0);
      transform-origin: center top;
      animation-name: progress-grow-y;
    }
    @keyframes progress-grow-y {
      from { transform: scaleY(0); }
      to   { transform: scaleY(1); }
    }
    .bar:hover,
    .bar.paused,
    .bar:has([data-region="step-popup"]:not([hidden])) { opacity: 1; }

    .ctrl-tts.active { color: var(--c-primary); }

    /* Autoplay-blocked state: the browser is holding narration until the user
       clicks (no activation on a script-navigated page). Tint the muted speaker
       orange and float a bouncing "click anywhere for sound" hint above it. */
    .ctrl-tts { position: relative; }
    .ctrl-tts.blocked { color: var(--c-warning); }
    .bar:has(.ctrl-tts.blocked) { opacity: 1; }
    .tts-hint {
      position: absolute;
      bottom: calc(100% + 9px);
      left: 50%;
      transform: translateX(-50%);
      transform-origin: bottom center;
      background: var(--c-warning);
      color: #fff;
      font-family: var(--ff-sans);
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;
      padding: 6px 9px;
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-md);
      pointer-events: none;
      z-index: 2;
      animation: tts-pudding 1.05s ease-in-out infinite;
    }
    .tts-hint[hidden] { display: none; }
    /* little downward nib pointing at the speaker */
    .tts-hint::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid transparent;
      border-top-color: var(--c-warning);
    }
    /* 띠용띠용 — squash before the jump, stretch up, land with a soft squash. */
    @keyframes tts-pudding {
      0%, 100% { transform: translateX(-50%) translateY(0)    scale(1, 1); }
      15%      { transform: translateX(-50%) translateY(0)    scale(1.12, 0.82); }
      40%      { transform: translateX(-50%) translateY(-7px) scale(0.9, 1.14); }
      60%      { transform: translateX(-50%) translateY(0)    scale(1.08, 0.9); }
      78%      { transform: translateX(-50%) translateY(-2px) scale(0.98, 1.03); }
    }
    @media (prefers-reduced-motion: reduce) {
      .tts-hint { animation: none; }
    }

    .counter {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      margin-right: 8px;
      opacity: 0.85;
      min-width: 36px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      padding: 2px 4px;
      border-radius: var(--r-xs);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .counter:hover { background: color-mix(in oklch, currentColor, transparent 92%); }
    [data-action="move-drag"] { cursor: grab; }
    [data-action="move-drag"].dragging { cursor: grabbing; }
    [data-action="move-drag"] svg { display: block; }

    /* 브랜드 펜촉 = 이동 핸들. 좌측 캡을 검정 원으로 덮되 알약 가장자리가
       2px 보이도록 외곽 높이(42px = 24 컨트롤 + 16 패딩 + 2 보더)보다 4px
       작은 38px 원을 좌/상/하 모두 2px 안쪽으로 들인다. 음수 마진으로 위치를
       당기되 세로 마진(-7)이 줄 높이를 24px(컨트롤과 동일)로 되돌려 바가
       세로로 커지지 않게 한다. */
    .mn-brand {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      cursor: grab;
      margin: -7px 6px -7px -13px;
    }
    .mn-brand svg { display: block; }
    .mn-brand.dragging,
    .mn-brand:active { cursor: grabbing; }

    .ctrl {
      background: transparent;
      border: none;
      color: inherit;
      font-family: inherit;
      font-size: 14px;
      line-height: 1;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-grid;
      place-items: center;
      padding: 0;
      transition: background 0.12s ease;
      flex-shrink: 0;
    }
    .ctrl:hover { background: color-mix(in oklch, currentColor, transparent 85%); }
    .ctrl:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .ctrl[disabled] { opacity: 0.4; cursor: not-allowed; }

    .divider {
      width: 1px;
      height: 16px;
      background: color-mix(in oklch, currentColor, transparent 80%);
      margin: 0 4px;
    }

    .ctrl-exit { opacity: 0.7; }
    .ctrl-exit:hover { opacity: 1; }

    [data-action="orient"] svg { display: block; }

    .step-popup {
      position: absolute;
      bottom: calc(100% + 6px);
      left: 0;
      margin: 0;
      padding: 6px 0;
      list-style: none;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-md);
      max-height: 180px;
      overflow-y: auto;
      min-width: 210px;
      max-width: 300px;
      font-family: var(--ff-sans);
      font-size: 13px;
      line-height: 1.3;
      z-index: 1;
    }
    .step-popup[hidden] { display: none; }
    .step-popup::-webkit-scrollbar { width: 8px; }
    .step-popup::-webkit-scrollbar-track {
      background: color-mix(in oklch, currentColor, transparent 82%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb {
      background: color-mix(in oklch, currentColor, transparent 45%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb:hover {
      background: color-mix(in oklch, currentColor, transparent 25%);
    }
    .step-popup li {
      padding: 6px 14px;
      cursor: pointer;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 0.12s ease, background 0.12s ease;
    }
    .step-popup li:hover { background: color-mix(in oklch, currentColor, transparent 92%); opacity: 1; }
    .step-popup li.active { opacity: 1; font-weight: 600; }

    .bar.vertical {
      flex-direction: column;
      align-items: center;
      /* Strip floats outside now, so the column just needs slim symmetric
         side padding. */
      padding: 14px 6px 8px 6px;
      gap: 4px;
    }
    /* 세로 모드: 컬럼 폭은 컨트롤(24px)이 정한다(외곽 38px). 원은 그보다
       4px 작은 34px 로 상단 캡을 덮되 좌/우/상 2px 가장자리를 남긴다. 가로
       음수 마진(-5)으로 컬럼을 넓히지 않게 하고, 위로 -13 당겨 상단 2px
       인셋. counter 와 8px 간격을 위해 아래 4px. */
    .bar.vertical .mn-brand {
      width: 34px;
      height: 34px;
      margin: -13px -5px 4px -5px;
    }
    /* 카운터는 세로쓰기로 "2 / 9" 를 위→아래로 쌓아 컬럼을 좁게 유지한다. */
    .bar.vertical .counter {
      writing-mode: vertical-lr;
      text-orientation: upright;
      margin-right: 0;
      margin-bottom: 4px;
      min-width: 0;
      padding: 2px 0;
      letter-spacing: -1px;
    }
    .bar.vertical .divider {
      width: 16px;
      height: 1px;
      margin: 4px 0;
    }
  `}let ke=null,We=null,se=null,ht=0,Ue=null,$e=null,ft=0,mt=!1,Jo=15,Qo=0,Zn=!1,ea=!1,gt=null,Jn=!1,Qn=!1;const er=new Set;function _t(e){if(Qn!==e){Qn=e;for(const t of[...er])t(e);W().set(U.ttsBlocked,e).catch(()=>{})}}function xl(){return Qn}function wl(e){return er.add(e),()=>er.delete(e)}function kl(){if(Jn||typeof window>"u")return;Jn=!0;const e=()=>{window.removeEventListener("click",e),Jn=!1,_t(!1);const t=gt;gt=null,t&&na(t)};window.addEventListener("click",e)}async function $l(){ea||(ea=!0,Zn=await tr(),Ll(e=>{Zn=e}))}function Sl(){return Zn}function Kt(){return typeof speechSynthesis>"u"?null:speechSynthesis}function Al(e,t){if(t<=0)return 0;if(t>=e.length)return e.length;let n=t;for(;n>0&&!/\s/.test(e[n-1]||"");)n--;return n}async function tr(){try{return await W().get(U.ttsEnabled)===!0}catch{return!1}}async function ta(e){try{await W().set(U.ttsEnabled,!!e)}catch{}}async function Ml(){try{const e=await W().get(U.ttsVoiceName);return typeof e=="string"&&e.length>0?e:null}catch{return null}}async function El(e){try{e===null?await W().remove(U.ttsVoiceName):await W().set(U.ttsVoiceName,e)}catch{}}function Ll(e){return W().subscribe([U.ttsEnabled],(t,n)=>{e(n===!0)})}function nr(){var e;if(ke=null,We=null,ht=0,Ue=null,mt=!1,ft=0,$e=null,gt=null,_t(!1),(e=Kt())==null||e.cancel(),se){const t=se;se=null,t(!1)}}function Tl(){const e=Kt();if(e){if(ke&&Ue){let t=ht;if(!mt&&ft>0){const n=Date.now()-ft,r=Math.round(n/1e3*Jo),o=Qo+r;t=Al(Ue,o)}$e={text:Ue,charIndex:t}}if(ke=null,We=null,ht=0,Ue=null,mt=!1,ft=0,gt=null,_t(!1),e.cancel(),se){const t=se;se=null,t(!1)}}}function Cl(e=1500){const t=Kt();if(!t)return Promise.resolve([]);const n=t.getVoices();return n.length>0?Promise.resolve(n):new Promise(r=>{let o=!1;const a=s=>{o||(o=!0,t.removeEventListener("voiceschanged",i),r(s))},i=()=>a(t.getVoices());t.addEventListener("voiceschanged",i),setTimeout(()=>a(t.getVoices()),e)})}function Pl(e){const t=(navigator.language||"").toLowerCase().split("-")[0];if(!t)return null;const n=e.filter(r=>r.lang.toLowerCase().split("-")[0]===t);return n.find(r=>r.name.startsWith("Google"))??n[0]??null}function Zt(){return We}function na(e){const t=Kt();if(!t)return Promise.resolve(!1);const n=e.trim();if(n.length===0)return Promise.resolve(!1);let r=n;if($e&&$e.text===n){if(r=n.slice($e.charIndex).trimStart(),$e=null,r.length===0)return Promise.resolve(!0)}else $e=null,nr();const o=n,a=o.length-r.length,i=(async()=>{const s=await Cl(),c=await Ml();return new Promise(l=>{var m;se=l;const p=new SpeechSynthesisUtterance(r),h=c&&s.find(g=>g.name===c)||Pl(s);h&&(p.voice=h,p.lang=h.lang),ke=p,Ue=o,ht=a,mt=!1,ft=Date.now(),Qo=a;const d=(p.lang||((m=p.voice)==null?void 0:m.lang)||navigator.language||"en").toLowerCase().split("-")[0];Jo=(d==="ko"||d==="ja"||d==="zh"?7:14)*(p.rate||1),p.addEventListener("boundary",g=>{ke===p&&(ht=a+(g.charIndex||0),mt=!0)});const f=g=>{se===l&&(se=null),ke===p&&(ke=null),We===i&&(We=null),l(g)};p.addEventListener("start",()=>_t(!1)),p.addEventListener("end",()=>f(!0)),p.addEventListener("error",g=>{g.error==="not-allowed"&&(gt=o,_t(!0),kl()),f(!1)}),t.speak(p)})})();return We=i,i}let Jt=!1;function Il(e=14){return`<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 a 2.5 2.5 0 0 1 0 4"/><path d="M 12.5 4 a 5 5 0 0 1 0 8"/></svg>`}function Ol(e=14){return`<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 L 14 9 M 14 6 L 11 9"/></svg>`}function Rl(e){Jt=e,oa()}function ra(){oa()}function oa(){const{shadow:e}=v;if(!e)return;const t=e.querySelector('[data-action="tts-toggle"]');if(!t)return;const n=xl();t.setAttribute("aria-pressed",String(Jt)),t.classList.toggle("active",Jt&&!n),t.classList.toggle("blocked",n);const r=t.querySelector('[data-region="tts-icon"]');r&&(r.innerHTML=n||!Jt?Ol(14):Il(14));const o=t.querySelector('[data-region="tts-hint"]');o&&(o.hidden=!n)}function Nl({height:e=16,color:t,title:n}={}){const r=Math.round(e*.7),o=t??"currentColor",a=n?`<title>${Dl(n)}</title>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20" width="${r}" height="${e}" fill="${o}" aria-hidden="${n?"false":"true"}" focusable="false">${a}<g fill-rule="evenodd"><path d="M 7 0.5 L 12.5 5 L 12.5 9.5 L 10 14 L 4 14 L 1.5 9.5 L 1.5 5 Z M 6.5 1.2 L 6.5 7.2 L 7.5 7.2 L 7.5 1.2 Z M 8.1 8.5 A 1.1 1.1 0 1 1 5.9 8.5 A 1.1 1.1 0 1 1 8.1 8.5 Z"/><rect x="3.5" y="15.5" width="7" height="2.8"/></g></svg>`}function Dl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ql(e){var r;if(v.host)return;const{host:t,shadow:n}=be();v.host=t,v.shadow=n,t.style.cssText=["position: fixed","bottom: 32px","left: 50%","transform: translateX(-50%)",`z-index: ${J+6}`,"pointer-events: auto",""].filter(Boolean).join("; "),n.innerHTML=`<style>${vl()}</style>${Bl()}`,n.addEventListener("click",o=>zl(o,e)),document.body.appendChild(t),ml(),document.addEventListener("mousedown",Zo,!0),(r=v.cleanupBlocked)==null||r.call(v),v.cleanupBlocked=wl(()=>ra()),ra(),v.orientationApplied=!1,Go().then(o=>{v.orientationApplied||(v.orientationApplied=!0,Vo(o))}),Xo().then(o=>{v.host&&o&&v.host.style.transform!=="none"&&(fl(v.host,o),Gt())})}function Bl(){var n,r;const t=((r=(n=ie()).isSupported)==null?void 0:r.call(n))!==!1?`<button class="ctrl" data-action="prompter" aria-label="${A("replay.prompter-aria")}" title="${A("replay.prompter-title")}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" style="display:block"><rect x="2.5" y="3" width="11" height="9" rx="1"/><path d="M 4.5 5.8 L 11.5 5.8 M 4.5 8 L 11.5 8 M 4.5 10.2 L 9 10.2"/></svg></button>`:"";return`
    <div class="bar" role="toolbar" aria-label="${A("replay.counter-aria")}">
      <span class="mn-brand" data-region="move-handle" role="button" aria-label="${A("replay.move-aria")}" title="${A("replay.move-title")}">${Nl({height:26})}</span>
      <span class="counter" data-region="counter" aria-live="polite" role="button" aria-haspopup="listbox" aria-expanded="false" tabindex="0">1 / 1</span>
      <button class="ctrl" data-action="prev" aria-label="${A("replay.prev-aria")}">‹</button>
      <button class="ctrl" data-action="pause" aria-label="${A("replay.pause-aria")}"><span data-region="pause-icon">II</span></button>
      <button class="ctrl" data-action="next" aria-label="${A("replay.next-aria")}">›</button>
      <span class="divider" aria-hidden="true"></span>
      ${t}
      <button class="ctrl ctrl-tts" data-action="tts-toggle" aria-pressed="false" aria-label="${A("replay.tts-aria")}" title="${A("replay.tts-title")}" data-region="tts-toggle"><span data-region="tts-icon"></span><span class="tts-hint" data-region="tts-hint" role="status" hidden>${A("replay.tts-blocked-hint")}</span></button>
      <button class="ctrl" data-action="orient" aria-label="${A("replay.orient-aria")}" data-region="orient-icon"></button>
      <button class="ctrl ctrl-exit" data-action="exit" aria-label="${A("replay.exit-aria")}">×</button>
      <div class="progress hidden" data-region="progress" aria-hidden="true"></div>
      <ul class="step-popup" data-region="step-popup" role="listbox" hidden></ul>
    </div>
  `}function zl(e,t){var a;const n=e.target;if(!(n instanceof Element))return;if(n.closest('[data-region="counter"]')){_l();return}const r=n.closest('[data-action="step-jump"]');if(r){const i=Number(r.getAttribute("data-index"));Number.isFinite(i)&&(Kn(),t.onStepSelect(i));return}if(n.closest('[data-action="tts-toggle"]')){t.onToggleTts();return}const o=(a=n.closest("[data-action]"))==null?void 0:a.getAttribute("data-action");switch(o&&Kn(),o){case"prev":t.onPrev();break;case"next":t.onNext();break;case"pause":t.onTogglePause();break;case"exit":t.onExit();break;case"prompter":t.onTogglePrompter();break;case"orient":Fl();break}}function Fl(){const{shadow:e}=v;if(!e)return;const t=e.querySelector(".bar");if(!t)return;const n=t.classList.contains("vertical")?"horizontal":"vertical";v.orientationApplied=!0,Vo(n),ul(n)}function Hl(){var e,t,n;(e=v.cleanupDrag)==null||e.call(v),v.cleanupDrag=null,(t=v.cleanupBlocked)==null||t.call(v),v.cleanupBlocked=null,document.removeEventListener("mousedown",Zo,!0),(n=v.host)==null||n.remove(),v.host=null,v.shadow=null,v.orientationApplied=!1,bl()}function aa(e){const{shadow:t}=v;if(!t)return;const n=t.querySelector('[data-region="counter"]');n&&(n.textContent=`${e.currentIndex+1} / ${e.total}`);const r=t.querySelector(".bar");r==null||r.classList.toggle("paused",e.paused);const o=t.querySelector('[data-region="pause-icon"]');o&&(o.textContent=e.paused?"▶":"II");const a=t.querySelector('[data-action="prev"]');a&&a.toggleAttribute("disabled",e.currentIndex<=0);const i=t.querySelector('[data-action="next"]');i&&(i.toggleAttribute("disabled",!1),i.setAttribute("aria-label",e.currentIndex>=e.total-1?A("replay.finish-aria"):A("replay.next-aria"))),yl(e.currentIndex,e.timerDurationMs??null,e.paused,e.timerElapsedMs??0),gl(e.steps??[],e.currentIndex),Rl(e.ttsEnabled===!0)}let fe=null;function Wl(e){bt();const{host:t,shadow:n}=be();fe=t,fe.style.cssText=["position: fixed","inset: 0","background: rgba(0, 0, 0, 0.40)",`z-index: ${J+7}`,"display: flex","align-items: center","justify-content: center","pointer-events: auto"].join("; "),n.innerHTML=`
    <style>${Ko()}</style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="nf-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">!</div>
        <div>
          <h2 id="nf-title">${A("replay.notfound.title")}</h2>
          <p>${A("replay.notfound.body")}</p>
        </div>
      </div>
      <div class="actions">
        <button class="secondary" data-action="stop">${A("replay.notfound.stop")}</button>
        <button class="primary" data-action="skip" autofocus>${A("replay.notfound.skip")} →</button>
      </div>
    </div>
  `,n.addEventListener("click",o=>{var s;const a=o.target;if(!(a instanceof HTMLElement))return;const i=(s=a.closest("[data-action]"))==null?void 0:s.getAttribute("data-action");i==="skip"?e.onSkip():i==="stop"&&e.onStop()});const r=o=>{o.key==="Enter"?(o.preventDefault(),e.onSkip()):o.key==="Escape"&&(o.preventDefault(),e.onStop())};document.addEventListener("keydown",r,!0),fe.__cleanup=()=>{document.removeEventListener("keydown",r,!0)},document.body.appendChild(fe)}function bt(){if(!fe)return;const e=fe.__cleanup;e==null||e(),fe.remove(),fe=null}let me=null;function Ul(e){Qt();const{host:t,shadow:n}=be();me=t,me.style.cssText=["position: fixed","inset: 0","background: rgba(0, 0, 0, 0.40)",`z-index: ${J+7}`,"display: flex","align-items: center","justify-content: center","pointer-events: auto"].join("; "),n.innerHTML=`
    <style>
      ${Ko()}
      .modal { border-top-color: var(--c-info); max-width: 480px; }
      .icon-circle { background: color-mix(in oklab, var(--c-info) 14%, transparent); color: var(--c-info); }
    </style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="um-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">↗</div>
        <div>
          <h2 id="um-title">${A("replay.url-mismatch.title")}</h2>
          <p>${A("replay.url-mismatch.body")}</p>
        </div>
      </div>
      <span class="url" data-region="url"></span>
      <div class="actions">
        <button class="secondary" data-action="cancel">${A("replay.url-mismatch.cancel")}</button>
        <button class="secondary" data-action="force">${A("replay.url-mismatch.force")}</button>
        <button class="primary" data-action="navigate" autofocus>${A("replay.url-mismatch.navigate")} →</button>
      </div>
    </div>
  `;const r=n.querySelector('[data-region="url"]');r&&(r.textContent=e.savedUrl),n.addEventListener("click",a=>{var c;const i=a.target;if(!(i instanceof HTMLElement))return;const s=(c=i.closest("[data-action]"))==null?void 0:c.getAttribute("data-action");s==="navigate"?e.onNavigate():s==="force"?e.onForce():s==="cancel"&&e.onCancel()});const o=a=>{a.key==="Escape"?(a.preventDefault(),e.onCancel()):a.key==="Enter"&&(a.preventDefault(),e.onNavigate())};document.addEventListener("keydown",o,!0),me.__cleanup=()=>{document.removeEventListener("keydown",o,!0)},document.body.appendChild(me)}function Qt(){if(!me)return;const e=me.__cleanup;e==null||e(),me.remove(),me=null}let Se=null;function sa(e){yt();const t=e.getBoundingClientRect(),n=jl(e),r=t.left+n.x,o=t.top+n.y,a=t.bottom+n.y,i=36,s=8,c=o-s-i<8,l=c?Math.min(window.innerHeight-8-i,a+s):Math.max(8,o-s-i),p=Math.max(8,Math.min(r,window.innerWidth-200)),h=c?"up":"down",{host:d,shadow:u}=be();Se=d,Se.style.cssText=["position: fixed",`top: ${l}px`,`left: ${p}px`,`z-index: ${J+6}`,"pointer-events: none"].join("; "),u.innerHTML=`
    <style>
      ${qe()}
      :host { display: block; font-family: var(--ff-sans); }
      *, *::before, *::after { box-sizing: border-box; }
      .bubble {
        position: relative;
        font-size: 11px;
        font-weight: 500;
        color: var(--c-surface);
        background: var(--c-text);
        padding: 6px 10px;
        border-radius: var(--r-sm);
        box-shadow: var(--shadow-md);
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .eyebrow {
        opacity: 0.6;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .tip {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--c-text);
        transform: translateX(-50%) rotate(45deg);
        left: 50%;
      }
      .tip.down { bottom: -3px; }
      .tip.up { top: -3px; }
    </style>
    <div class="bubble">
      <span class="eyebrow">${A("prompter.action-step")}</span>
      <span>${A("replay.action-prompt")}</span>
      <span class="tip ${h}" aria-hidden="true"></span>
    </div>
  `,document.body.appendChild(Se)}function yt(){Se==null||Se.remove(),Se=null}function jl(e){var t;try{const n=(t=e.ownerDocument)==null?void 0:t.defaultView;if(!n||n===window)return{x:0,y:0};const r=n.frameElement;if(!r)return{x:0,y:0};const o=r.getBoundingClientRect();return{x:o.left,y:o.top}}catch{return{x:0,y:0}}}let je=null;function Vl(e){je||(je=t=>{if(y.state)switch(t.key){case"ArrowRight":t.preventDefault(),e.onNext();break;case"ArrowLeft":t.preventDefault(),e.onPrev();break;case" ":case"Spacebar":t.preventDefault(),e.onTogglePause();break;case"Escape":t.preventDefault(),e.onExit();break}},document.addEventListener("keydown",je,!0))}function Gl(){je&&(document.removeEventListener("keydown",je,!0),je=null)}function ia(e,t,n=!1){try{const r=new URL(e),o=new URL(t);return r.origin!==o.origin||r.pathname!==o.pathname?!1:n?r.search===o.search&&r.hash===o.hash:!0}catch{return!1}}function Xl(e){var n;const t=(n=e.steps[0])==null?void 0:n.pickedAtUrl;return t&&t.length>0?t:e.url}async function Yl(e,t){var r,o,a,i;const n=(r=e.steps[t])==null?void 0:r.pickedAtUrl;if(!n||ia(n,location.href,!!e.strictUrlMatch))return!1;if(((o=y.state)==null?void 0:o.standalone)===!0)return Wa().tryHandoff({targetUrl:n,scenarioId:e.id,stepIndex:t,paused:((a=y.state)==null?void 0:a.paused)??!1});try{await Le().setActiveReplay({scenarioId:e.id,stepIndex:t,startedAt:Date.now(),paused:((i=y.state)==null?void 0:i.paused)??!1})}catch(s){console.warn("[manuscript] persist activeReplay before nav failed",s)}return location.href=n,!0}function Kl(e){return new Promise(t=>{Ul({savedUrl:e,onNavigate:()=>t("navigate"),onForce:()=>{Qt(),t("force")},onCancel:()=>{Qt(),t("cancel")}})})}async function Zl(e){try{const t=await Le().getActiveReplay();return(t==null?void 0:t.scenarioId)===e}catch{return!1}}async function rr(){const e=N();if(!(!e||!y.state)&&y.state.standalone!==!0)try{await Le().setActiveReplay({scenarioId:e.id,stepIndex:B(),startedAt:Date.now(),paused:y.state.paused})}catch(t){console.warn("[manuscript] persist activeReplay failed",t)}}async function ca(e,t,n){const r=N();if(!r)return{ok:!1};if(n&&await Zl(r.id))return{ok:!0};const o=Xl(r);if(!o||ia(o,location.href,!!r.strictUrlMatch))return{ok:!0};const a=await Kl(o);return a==="cancel"?{ok:!1}:a==="navigate"?(await Le().setActiveReplay({scenarioId:e,stepIndex:t,startedAt:Date.now()}),location.href=o,{ok:!1}):{ok:!0}}class la extends Error{constructor(t){super("element-not-found"),this.chain=t,this.name="ElementNotFoundError"}}function pa(e,t=Cr){return Jl(e,t).then(n=>n.el)}function Jl(e,t=Cr){const n=Cn(e);return n?Promise.resolve(n):new Promise((r,o)=>{let a=!1;const s=(oo(e.framePath)??document).body??document.body,c=new MutationObserver(()=>{if(a)return;const p=Cn(e);p&&(a=!0,c.disconnect(),clearTimeout(l),r(p))}),l=setTimeout(()=>{a||(a=!0,c.disconnect(),o(new la(e)))},t);c.observe(s,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-testid","data-test","id","aria-label"]})})}function da(e){const t={name:e.name,description:e.description,autoAdvanceMs:e.autoAdvanceMs??null,waitForNavigation:e.waitForNavigation,thumbnailDataUrl:e.thumbnailDataUrl??null},n=e.subElements,r=e.subDwellsMs;return n&&n.length>0&&r&&r.length===n.length+1&&(t.primaryDwellMs=r[0]??0,t.subs=n.map((o,a)=>({id:o.id,thumbnailDataUrl:o.thumbnailDataUrl,dwellMs:r[a+1]??0}))),t}function Ae(){const{state:e}=y;if(!e)return;const t=N();if(!t)return;const n=t.steps[B()],r=n&&!n.waitForNavigation&&n.autoAdvanceMs&&n.autoAdvanceMs>0?n.autoAdvanceMs:null;let o=0;if(r!==null){if(e.autoAdvanceResumeMs!==null)o=Math.max(0,r-e.autoAdvanceResumeMs);else if(e.subSeqResume&&(n!=null&&n.subDwellsMs)){const{idx:a,elapsedMs:i}=e.subSeqResume,s=n.subDwellsMs;let c=0;const l=a+1;for(let p=0;p<l;p++)c+=s[p]??0;o=Math.max(0,Math.min(r,c+i))}}if(tr().then(a=>{aa({currentIndex:B(),total:t.steps.length,paused:e.paused,timerDurationMs:r,timerElapsedMs:o,steps:t.steps.map(i=>({name:i.name})),ttsEnabled:a})}),aa({currentIndex:B(),total:t.steps.length,paused:e.paused,timerDurationMs:r,timerElapsedMs:o,steps:t.steps.map(a=>({name:a.name}))}),ie().isPrompterOpen()||Ha().isRecordingArmed()){const a=B(),i=t.steps[a],s=t.steps[a+1];ie().updatePrompter({scenarioId:t.id,scenarioName:t.name,currentIndex:a,total:t.steps.length,paused:e.paused,timerElapsedMs:o,steps:t.steps.map(c=>({name:c.name})),current:i?da(i):null,next:s?da(s):null})}}async function Ql(){if(ie().isPrompterOpen()){await ie().closePrompter(),or(!1);return}or(!0),await ie().openPrompter(),Ae()}function or(e){var t;for(const n of document.querySelectorAll('[data-manuscript="ui"]'))if((t=n.shadowRoot)!=null&&t.querySelector(".bar")){n.style.display=e?"none":"";break}}const ep=.125;function ua(e,t={}){const{behavior:n}=t,r=window.innerHeight,o=e.getBoundingClientRect(),a=window.scrollY+o.top;let i;o.height>r?i=a-r*ep:i=a-(r-o.height)/2,i=Math.max(0,Math.round(i)),window.scrollTo(n?{top:i,behavior:n}:{top:i})}async function en(e){var i,s;const{state:t}=y;if(!t)return;const n=N();if(!n)return;const r=n.steps[B()];if(Ae(),!r)return;bt(),yt();const o=B();if(Sl()&&!t.paused&&t.narratedStepIndex!==o&&na(r.description).then(c=>{c&&y.state&&B()===o&&(y.state.narratedStepIndex=o)}),!r.selectors){bn(),r.waitForNavigation||ga(e);return}const a=new AbortController;t.pendingWait=a;try{const c=await pa(r.selectors);if(a.signal.aborted)return;ua(c),Ir(c);const l=r.subElements??[];if(l.length>0){if(t.paused)return;const p=new AbortController;(i=t.subSequenceAbort)==null||i.abort(),t.subSequenceAbort=p,tp(c,r,l,p,e).finally(()=>{var h;((h=y.state)==null?void 0:h.subSequenceAbort)===p&&(y.state.subSequenceAbort=null)});return}r.waitForNavigation?(sa(c),ma(c,a,e.onNext)):ga(e)}catch(c){if(a.signal.aborted)return;if(c instanceof la){bn(),Wl({onSkip:e.onNext,onStop:e.onExit});return}console.error("[manuscript] replay error",c)}finally{((s=y.state)==null?void 0:s.pendingWait)===a&&(y.state.pendingWait=null)}}async function tp(e,t,n,r,o){var u;const a=t.subDwellsMs??[],i=a[0]??0;let s=e;const c=((u=y.state)==null?void 0:u.subSeqResume)??null,l=(c==null?void 0:c.idx)??-1,p=(c==null?void 0:c.elapsedMs)??0;if(y.state&&(y.state.subSeqResume=null),l===-1){ha(-1);const f=Math.max(0,i-p);if(await fa(f,r.signal),r.signal.aborted)return}const h=Math.max(0,l);for(let f=h;f<n.length;f++){const m=n[f];if(!m)continue;let g;try{g=await pa(m.selectors)}catch(k){console.warn("[manuscript] sub element not resolved, skipping",k);continue}if(r.signal.aborted)return;ua(g),ks(g,{durationMs:350}),s=g,ha(f);const b=a[f+1]??0,_=f===l?Math.max(0,b-p):b;if(await fa(_,r.signal),r.signal.aborted)return}if(y.state&&(y.state.subSeqNodeIdx=null,y.state.subSeqNodeStartMs=null),t.waitForNavigation){sa(s),ma(s,r,o.onNext);return}const d=Zt();d&&(await Promise.race([d,new Promise(f=>{r.signal.aborted?f():r.signal.addEventListener("abort",()=>f(),{once:!0})})]),r.signal.aborted)||!y.state||y.state.paused||o.onNext()}function ha(e){const{state:t}=y;t&&(t.subSeqNodeIdx=e,t.subSeqNodeStartMs=Date.now())}function fa(e,t){return e<=0?Promise.resolve():new Promise(n=>{const r=window.setTimeout(()=>n(),e);t.addEventListener("abort",()=>{window.clearTimeout(r),n()},{once:!0})})}function ma(e,t,n){if(!y.state)return;const r=()=>{e.removeEventListener("click",o,!0),t.signal.removeEventListener("abort",r)},o=()=>{r(),!(t.signal.aborted||!y.state)&&n()};e.addEventListener("click",o,!0),t.signal.addEventListener("abort",r)}function ga(e){var c;const{state:t}=y;if(!t||t.paused)return;const n=N();if(!n)return;const r=B(),o=n.steps[r];if(!o)return;t.autoAdvanceTimer!==null&&(window.clearTimeout(t.autoAdvanceTimer),t.autoAdvanceTimer=null),(c=t.autoAdvanceAbort)==null||c.abort();const a=new AbortController;t.autoAdvanceAbort=a;const i=t.autoAdvanceResumeMs;t.autoAdvanceResumeMs=null;const s=i??o.autoAdvanceMs;t.autoAdvanceDeadlineMs=s&&s>0?Date.now()+s:null,(async()=>{const l=[],p=Zt();if(p&&l.push(p),s&&s>0&&l.push(new Promise(u=>{const f=window.setTimeout(()=>{y.state&&y.state.autoAdvanceTimer===f&&(y.state.autoAdvanceTimer=null),u()},s);y.state&&(y.state.autoAdvanceTimer=f),a.signal.addEventListener("abort",()=>{window.clearTimeout(f),u()})})),l.length===0)return;const h=new Promise(u=>{a.signal.aborted?u():a.signal.addEventListener("abort",()=>u(),{once:!0})});if(await Promise.race([Promise.all(l).then(()=>{}),h]),a.signal.aborted)return;let d=Zt();for(;d;){if(await Promise.race([d.then(()=>{}),h]),a.signal.aborted)return;d=Zt()}!y.state||y.state.paused||B()===r&&e.onNext()})()}function tn(e={}){var n,r,o;const{state:t}=y;if(t){if(e.pauseTts){if(t.subSeqNodeIdx!==null&&t.subSeqNodeStartMs!==null){const a=Math.max(0,Date.now()-t.subSeqNodeStartMs);t.subSeqResume={idx:t.subSeqNodeIdx,elapsedMs:a}}if(t.autoAdvanceDeadlineMs!==null){const a=Math.max(0,t.autoAdvanceDeadlineMs-Date.now());t.autoAdvanceResumeMs=a>0?a:null}}else t.subSeqResume=null,t.autoAdvanceResumeMs=null,t.narratedStepIndex=null;t.subSeqNodeIdx=null,t.subSeqNodeStartMs=null,t.autoAdvanceDeadlineMs=null,t.autoAdvanceTimer!==null&&(window.clearTimeout(t.autoAdvanceTimer),t.autoAdvanceTimer=null),(n=t.autoAdvanceAbort)==null||n.abort(),t.autoAdvanceAbort=null,(r=t.pendingWait)==null||r.abort(),t.pendingWait=null,(o=t.subSequenceAbort)==null||o.abort(),t.subSequenceAbort=null,e.pauseTts?Tl():nr()}}const nn={onNext:()=>void on(),onExit:()=>void an()};async function ar(e=0,t={}){if(y.state)return;const n=N();if(!n||n.steps.length===0||t.standalone!==!0&&!(await ca(n.id,e,!0)).ok)return;y.state={originalStepIndex:B(),paused:t.paused??!1,autoAdvanceTimer:null,pendingWait:null,autoAdvanceAbort:null,subSequenceAbort:null,subSeqNodeIdx:null,subSeqNodeStartMs:null,subSeqResume:null,autoAdvanceDeadlineMs:null,autoAdvanceResumeMs:null,narratedStepIndex:null,atEnd:!1,standalone:t.standalone===!0,dirtyStepIndex:null},Lr("replay"),ql({onPrev:sr,onNext:on,onTogglePause:ir,onExit:an,onStepSelect:o=>void _a(o),onTogglePrompter:()=>void Ql(),onToggleTts:()=>void np()}),ie().isPrompterOpen()&&or(!0),Vl({onNext:()=>void on(),onPrev:()=>void sr(),onTogglePause:ir,onExit:()=>void an()}),y.unsubscribeStep=Te(Ae);const r=Math.min(Math.max(0,e),n.steps.length-1);$t(r),await rr(),await en(nn)}async function rn(e){if(!y.state)return;const t=N();t&&(e<0||e>=t.steps.length||(tn(),bt(),yt(),y.state.atEnd=!1,y.state.dirtyStepIndex=null,!await Yl(t,e)&&($t(e),await rr(),await en(nn))))}async function _a(e){e!==B()&&await rn(e)}async function on(){const{state:e}=y;if(!e)return;const t=N();if(!t)return;const n=B();if(n>=t.steps.length-1){tn(),bt(),yt(),e.paused=!0,e.atEnd=!0,Ae(),document.dispatchEvent(new CustomEvent("manuscript:replay-end"));return}await rn(n+1)}async function sr(){await rn(B()-1)}async function np(){const e=!await tr();await ta(e),e||nr(),Ae()}function ir(){const{state:e}=y;if(!e)return;if(e.atEnd&&e.paused){rp();return}if(e.paused&&e.dirtyStepIndex===B()){e.dirtyStepIndex=null,e.paused=!1,rn(B()),Ae();return}e.paused=!e.paused,e.paused?tn({pauseTts:!0}):en(nn),Ae()}async function rp(){if(!y.state)return;const e=N();!e||!(await ca(e.id,0,!1)).ok||y.state&&(y.state.paused=!1,y.state.atEnd=!1,$t(0),await rr(),await en(nn))}async function an(){var r;const{state:e}=y;if(!e)return;tn(),bt(),yt(),Qt(),bn(),Hl(),ie().closePrompter(),Gl(),(r=y.unsubscribeStep)==null||r.call(y),y.unsubscribeStep=null;const t=e.originalStepIndex,n=e.standalone===!0;y.state=null,$t(t),Lr("idle"),await Le().clearActiveReplay(),n&&(cl(),hs())}class sn extends Error{constructor(t,n){super(t),this.cause=n,this.name="SchemaError"}}function ba(e,t={}){if(!va(e))throw new sn("Root must be an object");const n=t.strict===!0,r=e.schemaVersion;let o;if(typeof r=="string")o=r;else{if(n)throw new sn("Missing schemaVersion field");console.warn("[manuscript] schemaVersion missing on stored scenario — assuming 0.1.0",e),o="0.1.0"}let a=e;if(o==="0.1.0")a=op(a),a=ya(a);else if(o==="0.1.1")a=ya(a);else if(o!==wr)throw new sn(`Unsupported schemaVersion: ${o}`);if(!Array.isArray(a.steps))throw new sn("Missing or invalid steps array");return a}function op(e){const t=e.steps,n=Array.isArray(t)?t.map(r=>va(r)?{...r,name:typeof r.name=="string"?r.name:"",description:typeof r.description=="string"?r.description:"",thumbnailDataUrl:typeof r.thumbnailDataUrl=="string"?r.thumbnailDataUrl:null,waitForNavigation:typeof r.waitForNavigation=="boolean"?r.waitForNavigation:!1}:r):t;return{...e,schemaVersion:"0.1.1",url:typeof e.url=="string"?e.url:"",steps:n}}function ya(e){return{...e,schemaVersion:wr}}function va(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const cn="mn-player";function xa(e){return/^[A-Za-z0-9_-]+$/.test(e)?e:null}function ap(e){let t=`${e.id};${e.stepIndex};${e.paused?1:0}`;return(e.pos!=null||e.orient==="v")&&(t+=`;${e.orient==="v"?"v":"h"}`),e.pos!=null&&(t+=`;${Math.round(e.pos.left)},${Math.round(e.pos.top)}`),t}function sp(e){if(!e)return null;const t=/^([^;]+);(\d+);([01])(?:;([hv]))?(?:;(-?\d+),(-?\d+))?$/.exec(e);if(!t||!t[1]||!t[2]||!t[3])return null;const n=xa(t[1]);if(!n)return null;const r={id:n,stepIndex:Number(t[2]),paused:t[3]==="1"};return t[4]&&(r.orient=t[4]==="v"?"v":"h"),t[5]&&t[6]&&(r.pos={left:Number(t[5]),top:Number(t[6])}),r}function ip(e){return sp(new URLSearchParams(e).get(cn))}function cp(e,t){const n=new URL(e);return n.searchParams.set(cn,ap(t)),n.href}function lp(e=window){const t=new URL(e.location.href);t.searchParams.has(cn)&&(t.searchParams.delete(cn),e.history.replaceState(null,"",t.pathname+t.search+t.hash))}function pp(e,t){const n=new Set;for(const r of e.steps){const o=r.pickedAtUrl;if(o)try{const a=new URL(o).origin;a!==t&&n.add(a)}catch{}}return[...n]}function dp(e){return{async tryHandoff({targetUrl:t,scenarioId:n,stepIndex:r,paused:o}){let a;try{a=new URL(t).origin}catch{return!1}if(a===e.currentOrigin())return e.persistState({scenarioId:n,stepIndex:r,paused:o}),e.navigate(t),!0;if(!xa(n))return!1;if(await e.presence.get(a)==="present"){const s=e.readControls?await e.readControls():{orient:"h",pos:null};e.navigate(cp(t,{id:n,stepIndex:r,paused:o,orient:s.orient,pos:s.pos}))}else e.degrade();return!0}}}function up(e){window.location.href=e}function hp(){const e=document.createElement("div");e.setAttribute("data-manuscript","ui"),e.style.cssText=`position:fixed;right:16px;bottom:16px;z-index:${J+2};`;const t=e.attachShadow({mode:"open"});t.innerHTML=`<div style="font:13px/1.4 -apple-system,system-ui,sans-serif;background:#1a2438;color:#fff;padding:10px 14px;border-radius:10px;box-shadow:0 8px 24px rgb(0 0 0 / 0.2);max-width:280px;">${A("player.handoff.unavailable")}</div>`,document.documentElement.appendChild(e),setTimeout(()=>e.remove(),6e3)}const wa=e=>`mn:player:scenario:${e}`,Me="mn:player:state",Ve="mn:player:armed";let ka="/",$a=()=>{};const Sa=new Set;function Aa(e){if(!e)return null;try{return new URL(e).origin}catch{return null}}function fp(e){var t;if(!Sa.has(e.id))for(let n=0;n<e.steps.length-1;n++){const r=e.steps[n];if(!(r!=null&&r.waitForNavigation))continue;const o=Aa(r.pickedAtUrl),a=Aa((t=e.steps[n+1])==null?void 0:t.pickedAtUrl);if(o&&a&&o!==a){Sa.add(e.id),console.warn(`[manuscript-player] Step ${n+1} "${r.name}" uses waitForNavigation, but the next step is on a different origin (${o} → ${a}). The player can't attach its resume state to a site-driven cross-origin navigation, so the tour won't resume there. Model cross-origin hops as a player-driven step instead. See player.html#player-crossorigin`);return}}}const Ge={};let Ma=!1;async function Ea(){Ma||(Ma=!0,typeof Ge.enabled=="boolean"&&await ta(Ge.enabled),Ge.voice&&await El(Ge.voice)),await $l()}function mp(e){e.scenarioUrlBase&&(ka=e.scenarioUrlBase),e.prefetch&&($a=e.prefetch),typeof e.tts=="boolean"&&(Ge.enabled=e.tts),e.ttsVoice&&(Ge.voice=e.ttsVoice)}function gp(e){if(e==null)throw new Error("scenario is required");if(typeof e=="string"){let t;try{t=JSON.parse(e)}catch{throw new Error("Invalid JSON")}return ba(t,{strict:!0})}return ba(e,{strict:!0})}async function cr(e){const t=gp(e);fp(t),$a(pp(t,location.origin)),localStorage.setItem(wa(t.id),JSON.stringify(t)),us(t)}async function _p(e){await Ea();const t=(e==null?void 0:e.startIndex)??0,n=(e==null?void 0:e.paused)??!1;jo()||Uo();const r=N();if(!r)throw new Error("no scenario loaded");const o={scenarioId:r.id,stepIndex:t,paused:n,startedAt:Date.now()};sessionStorage.setItem(Me,JSON.stringify(o)),sessionStorage.removeItem(Ve),await ar(t,{paused:n,standalone:!0})}function bp(){pt()&&ir()}async function yp(){pt()&&await on()}async function vp(){pt()&&await sr()}async function xp(e){pt()&&await _a(e)}async function wp(){pt()&&await an(),sessionStorage.removeItem(Me),sessionStorage.removeItem(Ve)}function kp(e){return Tr(({prev:n,next:r})=>{n==="replay"&&r==="idle"&&e()})}function $p(){var e;try{const n=(e=performance.getEntriesByType("navigation")[0])==null?void 0:e.type;return n==="reload"||n==="back_forward"}catch{return!1}}async function La(){if($p()){sessionStorage.removeItem(Me),sessionStorage.removeItem(Ve);return}if(sessionStorage.getItem(Ve)!=="1")return;sessionStorage.removeItem(Ve);const e=sessionStorage.getItem(Me);if(!e)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||typeof t.scenarioId!="string"||typeof t.stepIndex!="number")return;const n=t.scenarioId,r=t.stepIndex,o=t.paused===!0,a=localStorage.getItem(wa(n));if(!a){sessionStorage.removeItem(Me);return}try{const i=JSON.parse(a);await cr(i);const s=N();if(!s||r<0||r>=s.steps.length){sessionStorage.removeItem(Me);return}await ar(r,{paused:o,standalone:!0})}catch{sessionStorage.removeItem(Me)}}async function Sp(){try{await Ea();const e=ip(location.search);if(e){lp(),e.orient&&await W().set(U.replayControlsOrientation,e.orient==="v"?"vertical":"horizontal"),e.pos&&await W().set(U.replayControlsPosition,e.pos);try{const n=await(await fetch(`${ka}${e.id}.json`)).json();await cr(n);const r=N();if(!r||e.stepIndex<0||e.stepIndex>=r.steps.length)return;jo()||Uo(),await ar(e.stepIndex,{paused:e.paused,standalone:!0});return}catch{}}await La()}catch{}}const Ta={load:cr,play:_p,pause:bp,next:yp,prev:vp,jump:xp,exit:wp,onExit:kp,resumeIfActive:La,bootResume:Sp},Ap=1;function Mp(e){return typeof e=="object"&&e!==null&&e.source==="manuscript:player"&&e.kind==="present"}function Ep(e,t){return new Promise(n=>{let r=!1,o=()=>{},a;const i=s=>{r||(r=!0,clearTimeout(a),o(),n(s))};o=t.mountProbe(e,()=>{Promise.resolve().then(()=>i("present"))}),a=setTimeout(()=>i("absent"),t.timeoutMs)})}function Lp(e,t){const n=document.createElement("iframe");n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;width:0;height:0;border:0;left:-9999px;top:-9999px;";const r=o=>{o.origin===e&&o.source===n.contentWindow&&Mp(o.data)&&t()};return window.addEventListener("message",r),document.documentElement.appendChild(n),n.src=e+"/",()=>{window.removeEventListener("message",r),n.remove()}}function Tp(e){const t=new Map,n=r=>{let o=t.get(r);return o||(o=Ep(r,e),t.set(r,o)),o};return{prefetch:r=>r.forEach(n),get:n}}function Cp(e){const t=e.win??window;if(t===t.top)return!1;const n={source:"manuscript:player",kind:"present",version:e.version??Ap},r=e.allowedParentOrigins&&e.allowedParentOrigins.length?e.allowedParentOrigins:["*"];for(const o of r)t.parent.postMessage(n,o);return!0}const Xe=(typeof window<"u"?window.__MANUSCRIPT_PLAYER__:void 0)||{};if(Za({assetBaseUrl:Xe.assetBaseUrl}),os(),!Cp({allowedParentOrigins:Xe.allowedParentOrigins})){const e=Tp({mountProbe:Lp,timeoutMs:Xe.beaconTimeoutMs??1500});br({handoff:dp({presence:e,navigate:up,degrade:hp,currentOrigin:()=>location.origin,persistState:t=>{Le().setActiveReplay({...t,startedAt:Date.now()}),sessionStorage.setItem(Ve,"1")},readControls:async()=>({orient:await Go()==="vertical"?"v":"h",pos:await Xo()})})}),mp({scenarioUrlBase:Xe.scenarioUrlBase,prefetch:t=>e.prefetch(t),tts:Xe.tts,ttsVoice:Xe.ttsVoice});try{Ta.bootResume().catch(()=>{})}catch{}}const Pp="oklch(0.42 0.09 250)",Ip=3,Op="#000000",Rp=.55,ln=0,Ca=12;let H=null,C=null,Ye=null,vt=null,xt=null,pn=null,lr="muted";function Np(e){H||qp(),pn=e,pr(),Ra(e),Ye||(Ye=Te(()=>{pr(),pn&&Ra(pn)}))}function dn(){Ye==null||Ye(),Ye=null,vt&&(document.removeEventListener("mousedown",vt,!0),vt=null),xt&&(document.removeEventListener("keydown",xt),xt=null),pn=null,H&&(H.remove(),H=null,C=null)}function Dp(){return H!==null}function qp(){({host:H,shadow:C}=be()),H.setAttribute("data-popup","spotlight-editor"),H.style.cssText=["position: fixed",`z-index: ${J+5}`,"pointer-events: auto"].join("; "),C.innerHTML=Bp(),document.body.appendChild(H),Hp()}function Bp(){return`<style>${zp()}</style>
    <div class="card">
      <div class="header">
        <span class="caption">Spotlight</span>
        <div class="header-right">
          <div class="format-painter-wrap">
            <button type="button" class="format-painter-btn" data-action="format-painter-toggle" data-region="format-painter" aria-haspopup="true" aria-expanded="false" aria-label="${A("copy.formatting")}" title="${A("copy.formatting")}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="4.5" y="3" width="15" height="5" rx="1.5"></rect>
                <rect x="6.5" y="8" width="11" height="2.6" rx="0.6"></rect>
                <path d="M11 10.6 v6.4 a1 1 0 0 0 2 0 V10.6"></path>
              </svg>
            </button>
            <div class="format-painter-menu" data-region="format-painter-menu" role="menu" hidden>
              <button type="button" class="batch-btn" role="menuitem" data-action="apply-all-spotlight">${A("apply.all-steps")}</button>
            </div>
          </div>
          <div class="toggle" role="tablist" aria-label="Swatch mode">
            <button type="button" data-action="swatch-mode" data-mode="muted" aria-pressed="true">Muted</button>
            <button type="button" data-action="swatch-mode" data-mode="vibrant" aria-pressed="false">Vibrant</button>
          </div>
        </div>
      </div>

      <div class="row label-row">
        <span class="label">Ring</span>
        <div class="swatches" data-region="ring-swatches"></div>
      </div>
      <div class="row">
        <span class="label">Width</span>
        <div class="slider-wrap">
          <div class="slider-track" data-region="width-track">
            <div class="slider-fill" data-region="width-fill"></div>
            <div class="slider-thumb" data-region="width-thumb"></div>
          </div>
          <span class="slider-value" data-region="width-value">3</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row label-row">
        <span class="label">Dim</span>
        <div class="swatches" data-region="dim-swatches"></div>
      </div>
      <div class="row">
        <span class="label">Opacity</span>
        <div class="slider-wrap">
          <div class="slider-track" data-region="opacity-track">
            <div class="slider-fill" data-region="opacity-fill"></div>
            <div class="slider-thumb" data-region="opacity-thumb"></div>
          </div>
          <span class="slider-value" data-region="opacity-value">55%</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row footer-row">
        <button type="button" class="reset" data-action="reset">Reset to default</button>
        <button type="button" class="close" data-action="close" aria-label="Close">×</button>
      </div>
    </div>`}function zp(){return`
    ${qe()}
    :host { display: block; font-family: var(--ff-sans); color: var(--c-text); }
    *, *::before, *::after { box-sizing: border-box; }
    .card {
      width: 300px;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      font-size: var(--fs-body);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .header { display: flex; align-items: center; justify-content: space-between; }
    /* Format painter — brush button + dropdown (mirrors annotation editor). */
    .header-right { display: inline-flex; align-items: center; gap: 6px; }
    .format-painter-wrap { position: relative; display: inline-flex; }
    .format-painter-btn {
      width: 22px;
      height: 22px;
      padding: 0;
      appearance: none;
      background: transparent;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      color: var(--c-text-mute);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: border-color 160ms ease, color 160ms ease;
    }
    .format-painter-btn:hover,
    .format-painter-btn[aria-expanded="true"] {
      color: var(--c-text);
      border-color: var(--c-border-strong);
    }
    .format-painter-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 96px;
      padding: 6px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-card);
    }
    .format-painter-menu[hidden] { display: none; }
    .batch-btn {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
    }
    .batch-btn:hover { background: var(--c-tint); color: var(--c-text); }
    .caption {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .toggle {
      display: inline-flex;
      padding: 2px;
      background: var(--c-surface-2);
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
    }
    .toggle button {
      padding: 3px 9px;
      border: 0;
      border-radius: var(--r-xs);
      background: transparent;
      color: var(--c-text-mute);
      font-size: 10px;
      font-weight: 600;
      font-family: var(--ff-sans);
      cursor: pointer;
      letter-spacing: 0.02em;
    }
    .toggle button[aria-pressed="true"] {
      background: var(--c-surface);
      color: var(--c-text);
      box-shadow: var(--shadow-sm);
    }

    .row { display: flex; align-items: center; gap: 14px; }
    .row.label-row { gap: 14px; }
    .label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
      width: 60px;
      flex-shrink: 0;
    }

    .swatches { display: flex; gap: 4px; flex-wrap: wrap; flex: 1; }
    .sw {
      width: 22px;
      height: 22px;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      padding: 0;
      background: transparent;
      transition: transform 0.12s, box-shadow 0.12s;
      overflow: hidden;
      position: relative;
    }
    .sw:hover { transform: scale(1.08); }
    .sw[aria-pressed="true"] {
      border: 2px solid var(--c-text);
      box-shadow: 0 0 0 2px var(--c-surface), 0 0 0 3px var(--c-text);
    }
    .sw.transparent {
      background: var(--c-surface);
      border: 1px solid var(--c-border-strong);
    }
    .sw.transparent svg { position: absolute; inset: 0; display: block; }

    .slider-wrap { flex: 1; height: 28px; display: flex; align-items: center; gap: 10px; }
    .slider-track {
      flex: 1;
      height: 4px;
      border-radius: 999px;
      background: var(--c-border);
      position: relative;
      cursor: pointer;
    }
    .slider-fill {
      position: absolute; left: 0; top: 0; bottom: 0;
      background: var(--c-text);
      border-radius: 999px;
    }
    .slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--c-surface);
      border: 2px solid var(--c-text);
      cursor: grab;
      box-shadow: var(--shadow-sm);
    }
    .slider-thumb:active { cursor: grabbing; }
    .slider-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 38px;
      text-align: right;
    }

    .divider { height: 1px; background: var(--c-border); margin: 2px -12px; }

    .footer-row { justify-content: space-between; gap: 8px; }
    .reset {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
    }
    .reset:hover { background: var(--c-tint); color: var(--c-text); }
    .close {
      appearance: none;
      background: transparent;
      border: 0;
      color: var(--c-text-mute);
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      padding: 0 4px;
    }
    .close:hover { color: var(--c-text); }
  `}function pr(){var l;if(!C)return;const e=((l=ne())==null?void 0:l.spotlight)??{},t=e.stroke??Pp,n=e.strokeWidth??Ip,r=e.dimColor??Op,o=e.dimOpacity??Rp;C.querySelectorAll('[data-action="swatch-mode"]').forEach(p=>{p.setAttribute("aria-pressed",String(p.getAttribute("data-mode")===lr))});const a=C.querySelector('[data-region="ring-swatches"]');a&&(a.innerHTML=Pa(t,"ring"));const i=C.querySelector('[data-region="dim-swatches"]');i&&(i.innerHTML=Pa(r,"dim",!0));const s=Math.max(0,Math.min(100,(n-ln)/(Ca-ln)*100));Ia("width",s,String(n));const c=Math.round(Math.max(0,Math.min(1,o))*100);Ia("opacity",c,`${c}%`)}function Pa(e,t,n=!1){const r=lr==="muted"?No:Do,o=[];if(n){const a=e==="transparent";o.push(`<button type="button" class="sw transparent" data-slot="${t}" data-color="transparent" aria-pressed="${a}" title="transparent">
        <svg viewBox="0 0 22 22" width="22" height="22" aria-hidden="true">
          <line x1="3" y1="19" x2="19" y2="3" stroke="var(--c-error)" stroke-width="1.5"/>
        </svg>
      </button>`)}for(const{resolved:a}of r){const i=Fp(a,e);o.push(`<button type="button" class="sw" data-slot="${t}" data-color="${a}" aria-pressed="${i}" style="background:${a};"></button>`)}return o.join("")}function Fp(e,t){return!e||!t?!1:e.replace(/\s+/g,"").toLowerCase()===t.replace(/\s+/g,"").toLowerCase()}function Ia(e,t,n){if(!C)return;const r=C.querySelector(`[data-region="${e}-fill"]`),o=C.querySelector(`[data-region="${e}-thumb"]`),a=C.querySelector(`[data-region="${e}-value"]`),i=Math.max(0,Math.min(100,t));r&&(r.style.width=`${i}%`),o&&(o.style.left=`${i}%`),a&&(a.textContent=n)}function dr(e){if(!C)return;const t=C.querySelector('[data-region="format-painter-menu"]'),n=C.querySelector('[data-region="format-painter"]');t&&(e?t.removeAttribute("hidden"):t.setAttribute("hidden","")),n==null||n.setAttribute("aria-expanded",String(e))}function Hp(){C&&(C.addEventListener("click",e=>{var a,i;const t=e.target;if(!t)return;if(t.closest('[data-action="format-painter-toggle"]')){const s=C==null?void 0:C.querySelector('[data-region="format-painter-menu"]');dr((s==null?void 0:s.hasAttribute("hidden"))??!1);return}t.closest(".format-painter-wrap")||dr(!1);const n=t.closest('[data-action="swatch-mode"]');if(n){const s=n.getAttribute("data-mode");(s==="muted"||s==="vibrant")&&(lr=s,pr());return}const r=t.closest(".sw");if(r){const s=r.getAttribute("data-slot"),c=r.getAttribute("data-color")??"";s==="ring"?tt({stroke:c}):s==="dim"&&tt({dimColor:c});return}const o=(a=t.closest("[data-action]"))==null?void 0:a.getAttribute("data-action");o==="close"?dn():o==="reset"?tt({stroke:void 0,strokeWidth:void 0,dimColor:void 0,dimOpacity:void 0}):o==="apply-all-spotlight"&&(fs(((i=ne())==null?void 0:i.spotlight)??{}),dr(!1))}),Oa("width",e=>{const t=Math.round((ln+e*(Ca-ln))*2)/2;tt({strokeWidth:t})}),Oa("opacity",e=>{tt({dimOpacity:Math.round(e*100)/100})}),vt=e=>{if(!H||e.composedPath().includes(H))return;const n=e.target;n!=null&&n.closest('[data-manuscript="ui"]')||dn()},document.addEventListener("mousedown",vt,!0),xt=e=>{e.key==="Escape"&&dn()},document.addEventListener("keydown",xt))}function Oa(e,t){if(!C)return;const n=C.querySelector(`[data-region="${e}-track"]`),r=C.querySelector(`[data-region="${e}-thumb"]`);if(!n||!r)return;let o=!1;const a=c=>{const l=n.getBoundingClientRect();return Math.max(0,Math.min(1,(c-l.left)/l.width))},i=c=>{o&&t(a(c.clientX))},s=()=>{o=!1,document.removeEventListener("mousemove",i,!0),document.removeEventListener("mouseup",s,!0),Oe()};r.addEventListener("mousedown",c=>{Ie(`spotlight-${e}`),o=!0,t(a(c.clientX)),document.addEventListener("mousemove",i,!0),document.addEventListener("mouseup",s,!0),c.preventDefault()}),n.addEventListener("mousedown",c=>{const l=c.target;l instanceof Element&&l.closest(`[data-region="${e}-thumb"]`)||(Ie(`spotlight-${e}`),t(a(c.clientX)),o=!0,document.addEventListener("mousemove",i,!0),document.addEventListener("mouseup",s,!0))})}function Ra(e){if(!H)return;const t=e.getBoundingClientRect(),n=10,r=H.offsetWidth||300,o=H.offsetHeight||280;let a=t.right-r;a<8&&(a=8),a+r>window.innerWidth-8&&(a=window.innerWidth-r-8);let i=t.bottom+n;i+o>window.innerHeight-8&&(i=Math.max(8,t.top-o-n)),H.style.left=`${Math.round(a)}px`,H.style.top=`${Math.round(i)}px`}const Wp=Object.freeze(Object.defineProperty({__proto__:null,closeSpotlightEditor:dn,isSpotlightEditorOpen:Dp,openSpotlightEditor:Np},Symbol.toStringTag,{value:"Module"}));return Ta}));
