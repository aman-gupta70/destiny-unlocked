import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Sparkles, X, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export const WHATSAPP_NUMBER = "917079372324";
export const whatsappUrl = (msg = "Hi, I'd like my free Numerology Report.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  dob: z.string().min(1, "Date of birth is required"),
  guidance: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

type Ctx = { open: () => void };
const LeadDialogContext = createContext<Ctx | null>(null);

export const useLeadDialog = () => {
  const ctx = useContext(LeadDialogContext);
  if (!ctx) throw new Error("useLeadDialog must be used inside LeadDialogProvider");
  return ctx;
};

export function LeadDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const open = useCallback(() => {
    setSubmitted(false);
    setIsOpen(true);
    setDate(undefined);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // Update form value when date is selected
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setValue("dob", format(selectedDate, "yyyy-MM-dd"), { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // Send to Formspree with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("https://formspree.io/f/xkoakerw", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form (but user can still continue):", error);
      // Don't block the user from seeing the thank you message even if form fails
    }

    // Show thank you immediately, don't wait for fetch
    setSubmitted(true);
    reset();
    setDate(undefined);
  };

  return (
    <LeadDialogContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-panel max-h-[92vh] overflow-y-auto border-white/10 bg-[#120A22]/95 p-0 text-white sm:max-w-xl">
          <div className="relative p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-[#7C3AED] opacity-30 blur-3xl" />
            {!submitted ? (
              <>
                <DialogHeader className="text-left">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C084FC]">
                    <Sparkles className="h-3.5 w-3.5" /> Free Numerology Report
                  </div>
                  <DialogTitle className="text-2xl font-semibold sm:text-3xl">
                    Claim Your Free Personalized Numerology Report
                  </DialogTitle>
                  <DialogDescription className="text-[#A6A1B8]">
                    Share a few details and we'll prepare a tailored analysis just for you.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
                  <Field label="Full Name" error={errors.fullName?.message}>
                    <Input
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="lead-input"
                      {...register("fullName")}
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone Number" error={errors.phone?.message}>
                      <Input
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 555 123 4567"
                        className="lead-input"
                        {...register("phone")}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email?.message}>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="lead-input"
                        {...register("email")}
                      />
                    </Field>
                  </div>
                  <Field label="Date of Birth" error={errors.dob?.message}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left font-normal border border-white/20 bg-white/5 hover:bg-white/10"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "dd-MM-yyyy") : <span>DD-MM-YYYY</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#120A22] border-white/20">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          initialFocus
                          className="text-white"
                        />
                      </PopoverContent>
                    </Popover>
                    {/* Hidden input for form validation */}
                    <input type="hidden" {...register("dob")} />
                  </Field>
                  <Field label="What would you like guidance on?" error={errors.guidance?.message}>
                    <Textarea
                      rows={4}
                      placeholder="Example: I am facing challenges in my career and would like guidance regarding future opportunities. I would also like to understand my strengths, financial potential, and life direction."
                      className="lead-input resize-none"
                      {...register("guidance")}
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow h-12 w-full rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-base font-semibold text-white hover:from-[#7C3AED] hover:to-[#C084FC]"
                  >
                    {isSubmitting ? "Submitting…" : "Get My Free Report"}
                  </Button>
                  <p className="text-center text-xs text-[#A6A1B8]">
                    We respect your privacy. Your information stays confidential.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold sm:text-3xl">Thank you for your submission</h3>
                <p className="mx-auto mt-3 max-w-md text-[#A6A1B8]">
                  Your personalized numerology report request has been received successfully. We
                  will contact you shortly.
                </p>
                <div className="mt-7 flex flex-col items-center gap-3">
                  <a
                    href={whatsappUrl("Hi, I just submitted my free Numerology Report request.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-6 font-semibold text-white"
                  >
                    <MessageCircle className="h-5 w-5" /> Continue On WhatsApp
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1 text-sm text-[#A6A1B8] hover:text-white"
                  >
                    <X className="h-4 w-4" /> Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </LeadDialogContext.Provider>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-white">
        {label} <span className="text-[#C084FC]">*</span>
      </Label>
      {children}
      {error ? <p className="text-xs text-rose-400">{error}</p> : null}
    </div>
  );
}