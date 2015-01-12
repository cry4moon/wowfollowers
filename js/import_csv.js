import au.com.bytecode.opencsv.CSVReadProc;
import java.util.Arrays;

csv.read("class_test.csv", new CSVReadProc() {
    public void procRow(int rowIndex, String... values) {
        System.out.println(rowIndex + ": " + Arrays.asList(values));
    }
});

package au.com.bytecode.opencsv;
public class CSVAfter {
	// define format of CSV file one time and use everywhere
	// human readable configuration 
	private static final CSV csv = CSV
	                .separator(';')
	                .quote('\'')
	                .skipLines(1)
	                .charset("UTF-8")
	                .create();

	// do not throw checked exceptions
	public static void main(String[] args) {
	        String fileName = "class_test.csv";
	        // CSVReader will be closed after end of processing
	        // Less code to process CSV content -> less bugs
	        csv.read(fileName, new CSVReadProc() {
	                public void procRow(int rowIndex, String... values) {
	                        System.out.println(rowIndex + "# " + Arrays.asList(values));    
	                }
	        });
	}
}

