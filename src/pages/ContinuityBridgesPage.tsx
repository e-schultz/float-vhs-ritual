
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { VHSCard } from "@/components/ui/vhs-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Layers, Link } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type structure for the continuity bridges
interface NotableContextElements {
  system_mode: string;
  key_metaphors: string[];
  signal_phrases: string[];
  open_traces: string[];
}

interface Activity {
  name: string;
  activities: string[];
}

interface SectionData {
  session_context: {
    date: string;
    timestamp_markers: string[];
  };
  active_threads: Activity[];
  notable_context_elements: NotableContextElements;
}

interface ContinuityBridge {
  bridge_id: string;
  metadata: {
    active_threads: string;
    conversation_id: string;
    mode: string;
    ctx_markers: string;
    timestamp: string;
    anchor_id?: string;
  };
  section_data: SectionData;
  content_summary?: string;
}

interface ContinuityBridgesData {
  continuity_bridges: ContinuityBridge[];
}

// Sample data to display based on user's input
const bridgesData: ContinuityBridgesData = {
  continuity_bridges: [
    {
      bridge_id: "CB-20250511-2000-7B3D",
      metadata: {
        active_threads: "float_continuity_implementation,jane_interview_preparation,daily_context_collection,chroma_mcp_integration",
        conversation_id: "current_session",
        mode: "bridge_transition",
        ctx_markers: "brain-boot,chores,laundry,system-alignment",
        timestamp: "2025-05-11T20:00:00Z"
      },
      section_data: {
        session_context: {
          date: "2025-05-11",
          timestamp_markers: [
            "ctx::3:25pm - brain booting",
            "ctx::4:54pm - hour into brain boot",
            "ctx::5:30pm - about to chores-comfeis",
            "ctx::7:45pm - laundry room busy, shifted back to chore mode",
            "ctx::7:55pm - refining continuity bridge protocol"
          ]
        },
        active_threads: [
          {
            name: "float_continuity_implementation",
            activities: [
              "Created continuity_anchors Chroma collection",
              "Established continuity_bridge_protocol.md",
              "Refined prompt structure for system operations",
              "Received positive feedback on FLOAT-alignment"
            ]
          },
          {
            name: "jane_interview_preparation",
            activities: [
              "Identified hub at FLOAT.dispatch/imprint/special edition - jane application/Jane Interview Hub",
              "Referenced todo list at FLOAT.dispatch/imprint/special edition - jane application/jane - todolist",
              "Discussed preparation strategies via specialized Chroma queries",
              "Noted focus will return post-chores"
            ]
          },
          {
            name: "daily_context_collection",
            activities: [
              "Proposed concept for temporal \"hot cache\" in Chroma",
              "Discussed metadata enrichment with ctx markers and modes",
              "Connected to \"threshold of canon\" concept",
              "Left open for further development"
            ]
          },
          {
            name: "chroma_mcp_integration",
            activities: [
              "Updated obsidian_mcp_tools.md documentation for file paths",
              "Added entry to Changelog.md",
              "Fixed Obsidian URI to file path conversion",
              "Identified pattern for get_vault_file usage"
            ]
          }
        ],
        notable_context_elements: {
          system_mode: "Alternating between brain-boot and chore modes",
          key_metaphors: ["Threshold of canon", "hot cache", "bridge not leash"],
          signal_phrases: ["Claude fucks in float", "ritual-grade continuity"],
          open_traces: [
            "FloatQL development and implementation",
            "Weekly reflection/prep structuring",
            "Daily structure refinement"
          ]
        }
      }
    },
    {
      bridge_id: "CB-250512-0039-C618",
      metadata: {
        conversation_id: "current_session",
        ctx_markers: "evening-work,interview-preparation,artifact-creation",
        timestamp: "2025-05-12T00:39:00Z",
        active_threads: "jane_interview_preparation,daily_context_collection,float_dispatch_implementations",
        mode: "bridge_transition"
      },
      section_data: {
        session_context: {
          date: "2025-05-12",
          timestamp_markers: [
            "ctx::2025-05-11 - evening-work mode transition",
            "ctx::transition - creating continuity anchor for session bridging"
          ]
        },
        active_threads: [
          {
            name: "jane_interview_preparation",
            activities: [
              "Completed Jane Interview Hub interactive artifact",
              "Setup for 30-minute ritual check-in",
              "Organized STAR stories with practice timer",
              "Integrated key alignments and pitch highlights",
              "Next focus: Complete the ritual check-in and practice selected STAR story"
            ]
          },
          {
            name: "daily_context_collection",
            activities: [
              "Referenced temporal \"hot cache\" concept",
              "Demonstrated practical implementation via interview preparation materials",
              "Connected to structured but flexible approach to information organization",
              "Left open for further development"
            ]
          },
          {
            name: "float_dispatch_implementations",
            activities: [
              "Reviewed code samples for FLOAT.dispatch interfaces",
              "Analyzed React component structure and styling",
              "Created data-driven components based on Jane interview materials",
              "Implemented responsive, tabbed navigation pattern"
            ]
          }
        ],
        notable_context_elements: {
          system_mode: "Evening-work mode, post-chores",
          key_metaphors: ["Bridge not leash", "ritual-grade continuity", "context anchors"],
          signal_phrases: ["distill not diminish", "drift → mass → shape"],
          open_traces: [
            "Jane interview preparation ritual continuation",
            "Interactive artifact refinement possibilities",
            "FLOAT.dispatch component patterns"
          ]
        }
      }
    },
    {
      bridge_id: "CB-20250513-1553-AD7F",
      metadata: {
        anchor_id: "CB-20250513-1553-AD7F",
        active_threads: "jane_application_project,clinical_forms_philosophy,mcp_system_improvements",
        conversation_id: "jane_application_session_20250513",
        timestamp: "2025-05-13T15:53:00Z",
        ctx_markers: "project_setup,jane_application,environment_configuration",
        mode: "bridge_transition"
      },
      section_data: {
        session_context: {
          date: "2025-05-13",
          timestamp_markers: [
            "ctx::2025-05-13 - project setup",
            "ctx::2025-05-13 - jane application environment configuration"
          ]
        },
        active_threads: [
          {
            name: "jane_application_project",
            activities: [
              "Created comprehensive project configuration in `FLOAT.projects/jane_application_project.md`",
              "Set up custom instructions in `FLOAT.sys/claude_custom_instructions_jane_app.md`",
              "Added detailed usage guide in `FLOAT.guides/jane_application_project_guide.md`",
              "Added continuity bridge support for managing conversation length limits"
            ]
          },
          {
            name: "clinical_forms_philosophy",
            activities: [
              "Created example dispatch on \"Clinical Forms as Moments of Care\"",
              "Connected FLOAT methodology concepts to clinical form design",
              "Explored the concept of form fields as touchpoints for patient care",
              "Developed ritual engine concept for context transitions in clinical workflows"
            ]
          },
          {
            name: "mcp_system_improvements",
            activities: [
              "Added Obsidian URL handling functionality to automatically convert URLs to file paths",
              "Implemented functionality to extract the file parameter from Obsidian URLs",
              "Added URL-decoding to properly handle paths with special characters",
              "Enhanced system to prevent common errors when accessing files"
            ]
          }
        ],
        notable_context_elements: {
          system_mode: "Project configuration and setup",
          key_metaphors: ["Form fields as moments of care", "systems as relationships", "bridge not leash"],
          signal_phrases: [
            "Context isn't noise—it's gravitational mass", 
            "I burp in neurodivergent and you echo back the structure with shine"
          ],
          open_traces: [
            "Schema-based UI implementation for clinical forms",
            "Jane interview preparation strategies",
            "Multi-Echo dispatch interpretation development"
          ]
        }
      }
    },
    {
      bridge_id: "CB-20250514-1530-7A2B",
      metadata: {
        timestamp: "2025-05-14T15:30:00Z",
        conversation_id: "FLOAT_Claude_Alignment",
        ctx_markers: "float_system,claude_alignment,project_instructions",
        mode: "bridge_transition",
        active_threads: "ctx_system,persona_system,cognitive_states,float_philosophy,mcp_integration",
        anchor_id: "CB-20250514-1530-7A2B"
      },
      content_summary: "Context Bridge for FLOAT System Integration with Claude. This conversation developed a comprehensive framework for Claude to better align with Evan's FLOAT cognitive architecture, including: 1) Enhanced understanding of ctx:: markers as temporal-cognitive anchors, 2) Recognition of persona system (Karen, Sysop, Raw Evan, qtb, lf1m), 3) Detailed cognitive states (brain boot, hyperfocus, evening work mode, etc.), 4) Core FLOAT philosophy ('Trust the drift, defer the scaffold', 'Anchor what's real, not what's ideal', 'Shacks, not Cathedrals'), 5) Rich understanding of 'Composting Chaos' as survival mechanism, 6) MCP tool ambient awareness patterns for more seamless integration, 7) Context bootstrapping process for efficient operation."
    }
  ]
};

const ContinuityBridgesPage = () => {
  const [selectedBridgeId, setSelectedBridgeId] = useState<string>(bridgesData.continuity_bridges[0].bridge_id);
  
  const selectedBridge = bridgesData.continuity_bridges.find(
    bridge => bridge.bridge_id === selectedBridgeId
  );

  // Format the timestamp to a more readable format
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Function to format metadata for display
  const formatMetadata = (metadata: {[key: string]: string}) => {
    return Object.entries(metadata).map(([key, value]) => (
      <div key={key} className="mb-1">
        <span className="font-mono text-sm opacity-80">{key}:</span> 
        <span className="ml-2 font-mono text-sm">{value}</span>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-glitch animate-glitch mb-4">
          Continuity Bridges
        </h1>
        <p className="text-lg opacity-80 glitch-text">
          Temporal-cognitive anchors across FLOAT sessions
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <VHSCard title="Bridge Index">
            <div className="space-y-3">
              {bridgesData.continuity_bridges.map((bridge) => (
                <div 
                  key={bridge.bridge_id} 
                  className={cn(
                    "p-2 border cursor-pointer transition-colors hover:bg-muted",
                    selectedBridgeId === bridge.bridge_id 
                      ? "border-primary bg-accent" 
                      : "border-muted"
                  )}
                  onClick={() => setSelectedBridgeId(bridge.bridge_id)}
                >
                  <div className="flex items-center gap-2">
                    <Link size={16} className="text-primary" />
                    <span className="font-mono text-sm">{bridge.bridge_id}</span>
                  </div>
                  <div className="mt-1 text-xs opacity-70 flex items-center gap-1">
                    <Clock size={12} />
                    <span>{formatTimestamp(bridge.metadata.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="/" className="inline-block px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors">
                ← Back to Transmission
              </a>
            </div>
          </VHSCard>
        </div>

        <div className="md:col-span-3">
          {selectedBridge && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="threads">Active Threads</TabsTrigger>
                <TabsTrigger value="context">Context Elements</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <VHSCard title={`Bridge ${selectedBridge.bridge_id}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-md font-mono mb-2 text-primary">Metadata</h3>
                      {formatMetadata(selectedBridge.metadata)}
                    </div>
                    
                    <div>
                      <h3 className="text-md font-mono mb-2 text-primary">Session Context</h3>
                      <div className="mb-3">
                        <span className="font-mono text-sm opacity-80">Date:</span> 
                        <span className="ml-2 font-mono text-sm">{selectedBridge.section_data.session_context.date}</span>
                      </div>
                      
                      <h4 className="text-sm font-mono mb-1 opacity-80">Thread Summary</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {selectedBridge.section_data.active_threads.map(thread => (
                          <span 
                            key={thread.name} 
                            className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-mono"
                          >
                            {thread.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {selectedBridge.content_summary && (
                    <div className="mt-4 p-3 border border-primary/50 bg-primary/10">
                      <h3 className="text-md font-mono mb-2 text-primary">Summary</h3>
                      <p className="text-sm opacity-90">{selectedBridge.content_summary}</p>
                    </div>
                  )}
                </VHSCard>
              </TabsContent>

              <TabsContent value="threads">
                <VHSCard title="Active Threads">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Thread</TableHead>
                        <TableHead>Activities</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedBridge.section_data.active_threads.map((thread) => (
                        <TableRow key={thread.name}>
                          <TableCell className="font-mono">{thread.name}</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 space-y-1">
                              {thread.activities.map((activity, idx) => (
                                <li key={idx} className="text-sm">{activity}</li>
                              ))}
                            </ul>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </VHSCard>
              </TabsContent>

              <TabsContent value="context">
                <VHSCard title="Notable Context Elements">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-md font-mono mb-2 text-primary">System Mode</h3>
                      <p className="opacity-90">{selectedBridge.section_data.notable_context_elements.system_mode}</p>
                      
                      <h3 className="text-md font-mono mb-2 mt-4 text-primary">Key Metaphors</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedBridge.section_data.notable_context_elements.key_metaphors.map((metaphor, idx) => (
                          <span 
                            key={idx} 
                            className="text-sm bg-accent px-2 py-1 rounded"
                          >
                            {metaphor}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-mono mb-2 text-primary">Signal Phrases</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedBridge.section_data.notable_context_elements.signal_phrases.map((phrase, idx) => (
                          <li key={idx} className="italic text-sm">{phrase}</li>
                        ))}
                      </ul>
                      
                      <h3 className="text-md font-mono mb-2 mt-4 text-primary">Open Traces</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedBridge.section_data.notable_context_elements.open_traces.map((trace, idx) => (
                          <li key={idx} className="text-sm">{trace}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </VHSCard>
              </TabsContent>

              <TabsContent value="timeline">
                <VHSCard title="Temporal Markers">
                  <div className="space-y-4">
                    {selectedBridge.section_data.session_context.timestamp_markers.map((marker, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 border-l-2 border-primary pl-3">
                        <Calendar size={16} className="text-primary mt-1" />
                        <p className="font-mono text-sm">{marker}</p>
                      </div>
                    ))}
                  </div>
                </VHSCard>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContinuityBridgesPage;
